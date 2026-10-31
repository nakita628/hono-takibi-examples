import { createRoute, z } from '@hono/zod-openapi'

const AnalysisArchiveSummarySchema = z
  .object({
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the most recent archived image' }),
    total_data_bytes: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system.',
      }),
    total_image_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of unique images (digests) in the archive' }),
    total_tag_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record.',
      }),
  })
  .openapi({
    description:
      'A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers.',
    required: [],
  })
  .openapi('AnalysisArchiveSummary')

const AnalysisArchiveRulesSummarySchema = z
  .object({
    count: z.int().exactOptional().openapi({ description: 'The number of rules for this account' }),
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The newest last_updated timestamp from the set of rules' }),
  })
  .openapi({ description: 'Summary of the transition rule set', required: [] })
  .openapi('AnalysisArchiveRulesSummary')

type ArchiveSummaryType = {
  images?: z.infer<typeof AnalysisArchiveSummarySchema>
  rules?: z.infer<typeof AnalysisArchiveRulesSummarySchema>
}

const AccessCredentialSchema = z
  .object({
    created_at: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp of creation of the credential' }),
    type: z.literal('password').openapi({ description: 'The type of credential' }),
    value: z.string().openapi({ description: 'The credential value (e.g. the password)' }),
  })
  .openapi({
    description:
      "A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record",
    required: ['type', 'value'],
  })
  .openapi('AccessCredential')

const AccountSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp when the account was created' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional email address associated with the account' }),
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The timestamp of the last update to the account metadata itself (not users or creds)',
      }),
    name: z
      .string()
      .openapi({ description: 'The account identifier, not updatable after creation' }),
    state: z
      .enum(['enabled', 'disabled', 'deleting'])
      .exactOptional()
      .openapi({
        description:
          'State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system',
      }),
    type: z
      .enum(['user', 'admin', 'service'])
      .exactOptional()
      .openapi({
        description:
          "The user type (admin vs user). If not specified in a POST request, 'user' is default",
      }),
  })
  .openapi({ description: 'Account information', required: ['name'] })
  .openapi('Account')

const AccountCreationRequestSchema = z
  .object({
    email: z
      .string()
      .regex(
        /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      )
      .exactOptional()
      .openapi({
        description: 'An optional email to associate with the account for contact purposes',
      }),
    name: z
      .string()
      .regex(/^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$/)
      .openapi({
        description:
          'The account name to use. This will identify the account and must be globally unique in the system.',
      }),
  })
  .openapi({
    description: 'An account to create/add to the system. If already exists will return 400.',
    required: ['name'],
  })
  .openapi('AccountCreationRequest')

const AccountListSchema = z.array(AccountSchema).openapi('AccountList')

const AccountStatusSchema = z
  .object({
    state: z
      .enum(['enabled', 'disabled'])
      .exactOptional()
      .openapi({ description: 'The status of the account' }),
  })
  .openapi({ description: 'A summary of account status', required: [] })
  .openapi('AccountStatus')

const AnalysisArchiveAddResultSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Details on the status, e.g. the error message' }),
    digest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The image digest requested to be added' }),
    status: z
      .enum(['archived', 'archiving', 'error'])
      .exactOptional()
      .openapi({
        description:
          "The status of the archive add operation. Typically either 'archived' or 'error'",
      }),
  })
  .openapi({ description: 'The result of adding a single digest to the archive', required: [] })
  .openapi('AnalysisArchiveAddResult')

const AddAnalysisArchiveResultSchema = z
  .array(AnalysisArchiveAddResultSchema)
  .openapi({ description: 'List of analysis archive add results' })
  .openapi('AddAnalysisArchiveResult')

const ImageSelectorSchema = z
  .object({
    registry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io"',
      }),
    repository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine"',
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest"',
      }),
  })
  .openapi({
    description:
      'A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field',
    required: [],
  })
  .openapi('ImageSelector')

const AnalysisArchiveTransitionRuleExcludeSchema = z
  .object({
    expiration_days: z
      .int()
      .default(-1)
      .exactOptional()
      .openapi({
        description: 'How long the image selected will be excluded from the archive transition',
      }),
    selector: ImageSelectorSchema.exactOptional(),
  })
  .openapi({ description: 'Which Images to exclude from auto-archiving logic', required: [] })
  .openapi('AnalysisArchiveTransitionRuleExclude')

const AnalysisArchiveTransitionRuleSchema = z
  .object({
    analysis_age_days: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Matches if the analysis is strictly older than this number of days',
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    exclude: AnalysisArchiveTransitionRuleExcludeSchema.exactOptional(),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    max_images_per_account: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'This is the maximum number of image analyses an account can have. Can only be set on system_global rules',
      }),
    rule_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for archive rule' }),
    selector: ImageSelectorSchema.exactOptional(),
    system_global: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them',
      }),
    tag_versions_newer: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of images mapped to the tag that are newer' }),
    transition: z
      .enum(['archive', 'delete'])
      .openapi({
        description:
          'The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.',
      }),
  })
  .openapi({
    description: 'A rule for auto-archiving image analysis by time and/or tag-history',
    required: ['transition'],
  })
  .openapi('AnalysisArchiveTransitionRule')

const AnalysisArchiveRulesSchema = z
  .array(AnalysisArchiveTransitionRuleSchema)
  .openapi({
    description:
      'Rule set for automatic archiving of system objects and flushing of archived objects (permament delete).',
  })
  .openapi('AnalysisArchiveRules')

const AnalysisArchiveSourceSchema = z
  .object({
    digest: z
      .string()
      .regex(/^sha256:[a-fA-F0-9]{64}$/)
      .openapi({
        description:
          'The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.',
      }),
  })
  .nullable()
  .openapi({
    description:
      'An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set',
    required: ['digest'],
  })
  .openapi('AnalysisArchiveSource')

const AnalysisArchiveTransitionHistorySchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    imageDigest: z.string().exactOptional(),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    rule_id: z.string().exactOptional(),
    transition: z.enum(['archive', 'delete']).exactOptional(),
    transition_task_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The task that created & updated this entry' }),
  })
  .openapi({
    description: 'A rule for auto-archiving image analysis by time and/or tag-history',
    required: [],
  })
  .openapi('AnalysisArchiveTransitionHistory')

const AnalysisUpdateEvalSchema = z
  .object({
    analysis_status: z.string().exactOptional(),
    annotations: z.object({}).exactOptional(),
    image_digest: z.string().exactOptional(),
  })
  .openapi({ description: 'Evaluation Results for an entity (current or last)', required: [] })
  .openapi('AnalysisUpdateEval')

const NotificationBaseSchema = z
  .object({
    created_at: z.int().exactOptional(),
    dataId: z.string().exactOptional(),
    last_updated: z.int().exactOptional(),
    max_tries: z.int().exactOptional(),
    queueId: z.string().exactOptional(),
    record_state_key: z.string().default('active').exactOptional(),
    record_state_val: z.string().nullable().exactOptional(),
    tries: z.int().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({
    description: 'base object for Notifications (every notification has this basic structure)',
    required: [],
  })
  .openapi('NotificationBase')

const BaseNotificationDataSchema = z
  .object({
    notification_type: z.string().exactOptional(),
    notification_user: z.string().exactOptional(),
    notification_user_email: z.string().exactOptional(),
  })
  .openapi({
    description: 'Every notification has a payload, which follows this basic structure',
    required: [],
  })
  .openapi('BaseNotificationData')

const GenericNotificationPayloadSchema = z
  .object({
    notificationId: z.string().exactOptional(),
    subscription_key: z.string().exactOptional(),
    subscription_type: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ description: 'Parent class for Notification Payloads', required: [] })
  .openapi('GenericNotificationPayload')

const AnalysisUpdateNotificationPayloadSchema = GenericNotificationPayloadSchema.and(
  z
    .object({
      annotations: z
        .object({})
        .nullable()
        .exactOptional()
        .openapi({ description: 'List of Corresponding Image Annotations' }),
      curr_eval: AnalysisUpdateEvalSchema.exactOptional(),
      last_eval: AnalysisUpdateEvalSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('AnalysisUpdateNotificationPayload')

const AnalysisUpdateNotificationDataSchema = BaseNotificationDataSchema.and(
  z
    .object({ notification_payload: AnalysisUpdateNotificationPayloadSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('AnalysisUpdateNotificationData')

const AnalysisUpdateNotificationSchema = NotificationBaseSchema.and(
  z
    .object({ data: AnalysisUpdateNotificationDataSchema.exactOptional() })
    .openapi({
      description: 'The Notification Object definition for Tag Update Notifications',
      required: [],
    }),
).openapi('AnalysisUpdateNotification')

const AnchoreErrorCodeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the error code' }),
    name: z.string().exactOptional().openapi({ description: 'Error code name' }),
  })
  .openapi({
    description: 'A description of an anchore error code (name, description)',
    required: [],
  })
  .openapi('AnchoreErrorCode')

const ImageContentSchema = z
  .object({})
  .openapi({
    description:
      'A metadata content record for a specific image, containing different content type entries',
  })
  .openapi('ImageContent')

const ImageDetailSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    dockerfile: z.string().nullable().exactOptional(),
    fulldigest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full docker-pullable digest string including the registry url and repository necessary get the image',
      }),
    fulltag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Full docker-pullable tag string referencing the image' }),
    imageDigest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The parent Anchore Image record to which this detail maps' }),
    imageId: z.string().exactOptional(),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    registry: z.string().exactOptional(),
    repo: z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A metadata detail record for a specific image. Multiple detail records may map a single catalog image.',
    required: [],
  })
  .openapi('ImageDetail')

const AnchoreImageSchema = z
  .object({
    analysis_status: z
      .enum(['not_analyzed', 'analyzing', 'analyzed', 'analysis_failed'])
      .exactOptional()
      .openapi({
        description: 'A state value for the current status of the analysis progress of the image',
      }),
    annotations: z.object({}).exactOptional(),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    imageDigest: z.string().exactOptional(),
    image_content: ImageContentSchema.exactOptional(),
    image_detail: z
      .array(ImageDetailSchema)
      .exactOptional()
      .openapi({
        description: 'Details specific to an image reference and type such as tag and image source',
      }),
    image_status: z
      .enum(['active', 'inactive', 'disabled'])
      .exactOptional()
      .openapi({ description: 'State of the image' }),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    record_version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the record, used for internal schema updates and data migrations.',
      }),
    userId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories.',
    required: [],
  })
  .openapi('AnchoreImage')

const AnchoreImageListSchema = z
  .array(AnchoreImageSchema)
  .openapi({ description: 'A list of Anchore Images' })
  .openapi('AnchoreImageList')

const AnchoreImageTagSummarySchema = z
  .object({
    analysis_status: z.string().exactOptional(),
    analyzed_at: z.int().exactOptional(),
    created_at: z.int().exactOptional(),
    fulltag: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
    imageId: z.string().exactOptional(),
    image_status: z.string().exactOptional(),
    parentDigest: z.string().exactOptional(),
    tag_detected_at: z.int().exactOptional(),
  })
  .openapi({ description: 'A unique image in the engine.', required: [] })
  .openapi('AnchoreImageTagSummary')

const AnchoreImageTagSummaryListSchema = z
  .array(AnchoreImageTagSummarySchema)
  .openapi({ description: 'a list of AnchoreImageTagSummary objects' })
  .openapi('AnchoreImageTagSummaryList')

const AnnotationsSchema = z
  .object({})
  .openapi({ description: 'Simple key/value pairs where the value may be optional' })
  .openapi('Annotations')

const ApiErrorResponseSchema = z
  .object({
    code: z.int32().exactOptional(),
    detail: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Details structure for additional information about the error if available. Content and structure will be error specific.',
      }),
    error_type: z.string().exactOptional(),
    message: z.string().exactOptional(),
  })
  .openapi({ description: 'Generic HTTP API error response', required: [] })
  .openapi('ApiErrorResponse')

const ArchiveSummarySchema: z.ZodType<ArchiveSummaryType> = z
  .lazy(() =>
    z
      .object({
        images: AnalysisArchiveSummarySchema.exactOptional(),
        rules: AnalysisArchiveRulesSummarySchema.exactOptional(),
      })
      .openapi({
        description:
          "A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available.",
        required: [],
      }),
  )
  .openapi('ArchiveSummary')

const TagEntrySchema = z
  .object({
    detected_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry.',
      }),
    pullstring: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The pullable string for the tag. E.g. "docker.io/library/node:latest"',
      }),
    registry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registry hostname:port section of the pull string' }),
    repository: z
      .string()
      .exactOptional()
      .openapi({ description: 'The repository section of the pull string' }),
    tag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tag-only section of the pull string' }),
  })
  .openapi({
    description: 'A docker-pullable tag value as well as deconstructed components',
    required: [],
  })
  .openapi('TagEntry')

const ArchivedAnalysisSchema = z
  .object({
    analyzed_at: z.iso.datetime({ offset: true }).exactOptional(),
    annotations: z
      .object({})
      .exactOptional()
      .openapi({ description: 'User provided annotations as key-value pairs' }),
    archive_size_bytes: z
      .int()
      .exactOptional()
      .openapi({ description: 'The size, in bytes, of the analysis archive file' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    imageDigest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The image digest (digest of the manifest describing the image, per docker spec)',
      }),
    image_detail: z
      .array(TagEntrySchema)
      .exactOptional()
      .openapi({ description: 'List of tags associated with the image digest' }),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    parentDigest: z
      .string()
      .exactOptional()
      .openapi({ description: 'The digest of a parent manifest (for manifest-list images)' }),
    status: z
      .enum(['archiving', 'archived', 'deleting', 'deleted'])
      .exactOptional()
      .openapi({ description: 'The archival status' }),
  })
  .openapi({ required: [] })
  .openapi('ArchivedAnalysis')

const ArchivedAnalysesSchema = z
  .array(ArchivedAnalysisSchema)
  .openapi({ description: 'List of archived analyses' })
  .openapi('ArchivedAnalyses')

const CVSSV2ScoresSchema = z
  .object({
    base_score: z.number().nullable().exactOptional(),
    exploitability_score: z.number().nullable().exactOptional(),
    impact_score: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CVSSV2Scores')

const CVSSV3ScoresSchema = z
  .object({
    base_score: z.number().nullable().exactOptional(),
    exploitability_score: z.number().nullable().exactOptional(),
    impact_score: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CVSSV3Scores')

const ContentFilesResponseSchema = z
  .object({
    content: z
      .array(
        z
          .object({
            filename: z.string().exactOptional(),
            gid: z.int().exactOptional(),
            linkdest: z.string().nullable().exactOptional(),
            mode: z.string().exactOptional(),
            sha256: z.string().nullable().exactOptional(),
            size: z.int().exactOptional(),
            type: z.string().exactOptional(),
            uid: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    content_type: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
  })
  .openapi({ description: 'File content listings from images', required: [] })
  .openapi('ContentFilesResponse')

const ContentJAVAPackageResponseSchema = z
  .object({
    content: z
      .array(
        z
          .object({
            cpes: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'A list of Common Platform Enumerations that may uniquely identify the package',
              }),
            'implementation-version': z.string().exactOptional(),
            location: z.string().exactOptional(),
            'maven-version': z.string().exactOptional(),
            origin: z.string().exactOptional(),
            package: z.string().exactOptional(),
            'specification-version': z.string().exactOptional(),
            type: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    content_type: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
  })
  .openapi({ description: 'Java package content listings from images', required: [] })
  .openapi('ContentJAVAPackageResponse')

const MalwareScanSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if the scanner is enabled' }),
    findings: z
      .array(
        z
          .object({
            path: z
              .string()
              .exactOptional()
              .openapi({ description: "A path for a file in the image's rootfs" }),
            signature: z
              .string()
              .exactOptional()
              .openapi({ description: 'The malware signature found at the path' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Open schema for scanner-specific metadata related to the scan result',
      }),
    scanner: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the scanner that produced the finding' }),
  })
  .openapi({ description: 'A single scan from a scanner', required: [] })
  .openapi('MalwareScan')

const ContentMalwareResponseSchema = z
  .object({
    content: z
      .array(MalwareScanSchema)
      .exactOptional()
      .openapi({ description: 'List of malware scan results, one per scanner configured to run' }),
    content_type: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
  })
  .openapi({ description: 'Malware listing response', required: [] })
  .openapi('ContentMalwareResponse')

const ContentPackageResponseSchema = z
  .object({
    content: z
      .array(
        z
          .object({
            cpes: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'A list of Common Platform Enumerations that may uniquely identify the package',
              }),
            license: z
              .string()
              .exactOptional()
              .openapi({ description: "Deprecated in favor of the 'licenses' field\"" }),
            licenses: z.array(z.string()).exactOptional(),
            location: z.string().exactOptional(),
            origin: z.string().exactOptional(),
            package: z.string().exactOptional(),
            size: z.string().exactOptional(),
            type: z.string().exactOptional(),
            version: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    content_type: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
  })
  .openapi({ description: 'Package content listings from images', required: [] })
  .openapi('ContentPackageResponse')

const ContentResponseSchema = z
  .object({
    content: z.array(z.object({})).exactOptional(),
    content_type: z.string().exactOptional(),
    imageDigest: z.string().exactOptional(),
  })
  .openapi({ description: 'Generic wrapper for content listings from images', required: [] })
  .openapi('ContentResponse')

const CredentialListSchema = z.array(AccessCredentialSchema).openapi('CredentialList')

const DeleteImageResponseSchema = z
  .object({
    detail: z.string().exactOptional(),
    digest: z.string(),
    status: z
      .enum(['not_found', 'deleting', 'delete_failed'])
      .openapi({ description: 'Current status of the image deletion' }),
  })
  .openapi({
    description: 'Image deletion response containing status and details',
    required: ['digest', 'status'],
  })
  .openapi('DeleteImageResponse')

const DeleteImageResponseListSchema = z
  .array(DeleteImageResponseSchema)
  .openapi({ description: 'A list of delete image responses' })
  .openapi('DeleteImageResponseList')

const EventDescriptionSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message associated with the event type' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The event type. The last component of the fully-qualified event_type (category.subcategory.event)',
      }),
    resource_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of resource this event is generated from' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The fully qualified event type as would be seen in the event payload',
      }),
  })
  .openapi({ description: 'A description of an event type', required: [] })
  .openapi('EventDescription')

const EventSubcategorySchema = z
  .object({
    description: z.string().exactOptional(),
    events: z.array(EventDescriptionSchema).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ description: 'A collection of events related to each other', required: [] })
  .openapi('EventSubcategory')

const EventCategorySchema = z
  .object({
    category: z.string().exactOptional(),
    description: z.string().exactOptional(),
    subcategories: z.array(EventSubcategorySchema).exactOptional(),
  })
  .openapi({ description: 'A collection of event subcategories', required: [] })
  .openapi('EventCategory')

const EventResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    event: z
      .object({
        category: z.string().exactOptional(),
        details: z.object({}).exactOptional(),
        level: z.string().exactOptional(),
        message: z.string().exactOptional(),
        resource: z
          .object({
            id: z.string().exactOptional(),
            type: z.string().exactOptional(),
            user_id: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        source: z
          .object({
            base_url: z.string().exactOptional(),
            hostid: z.string().exactOptional(),
            request_id: z.string().exactOptional(),
            servicename: z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        timestamp: z.iso.datetime({ offset: true }).exactOptional(),
        type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    generated_uuid: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A record of occurance of an asynchronous event triggered either by system or by user activity',
    required: [],
  })
  .openapi('EventResponse')

const EventTypesListSchema = z
  .array(EventCategorySchema)
  .openapi({ description: 'Array of EventCategory objects' })
  .openapi('EventTypesList')

const EventsListSchema = z
  .object({
    item_count: z.int().exactOptional().openapi({ description: 'Number of events in this page' }),
    next_page: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean flag, True indicates there are more events and False otherwise',
      }),
    page: z.int().exactOptional().openapi({ description: 'Page number of this result set' }),
    results: z
      .array(EventResponseSchema)
      .exactOptional()
      .openapi({ description: 'List of events' }),
  })
  .openapi({ description: 'Response envelope for paginated listing of events', required: [] })
  .openapi('EventsList')

const FeedGroupMetadataSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_sync: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional(),
    record_count: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FeedGroupMetadata')

const FeedMetadataSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Date the metadata record was created in engine (first seen on source)',
      }),
    groups: z.array(FeedGroupMetadataSchema).exactOptional(),
    last_full_sync: z.iso.datetime({ offset: true }).exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'name of the feed' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date the metadata was last updated' }),
  })
  .openapi({
    description:
      'Metadata on a single feed based on what the engine finds from querying the endpoints',
    required: [],
  })
  .openapi('FeedMetadata')

const GroupSyncResultSchema = z
  .object({
    group: z.string().exactOptional().openapi({ description: 'The name of the group' }),
    status: z.enum(['success', 'failure']).exactOptional(),
    total_time_seconds: z
      .number()
      .exactOptional()
      .openapi({ description: 'The duration of the group sync in seconds' }),
    updated_image_count: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync.",
      }),
    updated_record_count: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of feed data records synced down as either updates or new records',
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupSyncResult')

const FeedSyncResultSchema = z
  .object({
    feed: z.string().exactOptional().openapi({ description: 'The name of the feed synced' }),
    groups: z
      .array(GroupSyncResultSchema)
      .exactOptional()
      .openapi({ description: 'Array of group sync results' }),
    status: z
      .enum(['success', 'failure'])
      .exactOptional()
      .openapi({ description: 'The result of the sync operations, either co' }),
    total_time_seconds: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'The duratin, in seconds, of the sync of the feed, the sum of all the group syncs',
      }),
  })
  .openapi({ description: 'The result of a sync of a single feed', required: [] })
  .openapi('FeedSyncResult')

const FeedSyncResultsSchema = z
  .array(FeedSyncResultSchema)
  .openapi({
    description:
      'An array of feed sync summaries representing the result of an explicit feed sync operation',
  })
  .openapi('FeedSyncResults')

const RegexContentMatchSchema = z
  .object({
    lines: z
      .array(z.int())
      .exactOptional()
      .openapi({ description: 'A list of line numbers in the file that matched the regex' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name associated with the regular expression' }),
    regex: z
      .string()
      .exactOptional()
      .openapi({ description: 'The regular expression used for the match' }),
  })
  .openapi({ description: 'Match of a named regex on a file', required: [] })
  .openapi('RegexContentMatch')

const FileContentSearchResultSchema = z
  .object({
    matches: z.array(RegexContentMatchSchema).exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({
    description: 'The retrieved file entry including content (b64 encoded)',
    required: [],
  })
  .openapi('FileContentSearchResult')

const FileContentSearchListSchema = z
  .array(FileContentSearchResultSchema)
  .openapi({ description: 'Simple array of RetrievedFileMetadata objects' })
  .openapi('FileContentSearchList')

const TriggerParamSpecSchema = z
  .object({
    description: z.string().exactOptional(),
    example: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An example value for the parameter (encoded as a string if the parameter is an object or list type)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Parameter name as it appears in policy document' }),
    required: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is this a required parameter or optional' }),
    state: z
      .enum(['active', 'deprecated', 'eol'])
      .exactOptional()
      .openapi({ description: 'State of the trigger parameter' }),
    superceded_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of another trigger that supercedes this on functionally if this is deprecated',
      }),
    validator: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TriggerParamSpec')

const TriggerSpecSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Trigger description for what it tests and when it will fire during evaluation',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the trigger as it would appear in a policy document' }),
    parameters: z
      .array(TriggerParamSpecSchema)
      .exactOptional()
      .openapi({ description: 'The list of parameters that are valid for this trigger' }),
    state: z
      .enum(['active', 'deprecated', 'eol'])
      .exactOptional()
      .openapi({ description: 'State of the trigger' }),
    superceded_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of another trigger that supercedes this on functionally if this is deprecated',
      }),
  })
  .openapi({ description: 'Definition of a trigger and its parameters', required: [] })
  .openapi('TriggerSpec')

const GateSpecSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the gate' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Gate name, as it would appear in a policy document' }),
    state: z
      .enum(['active', 'deprecated', 'eol'])
      .exactOptional()
      .openapi({
        description: "State of the gate and transitively all triggers it contains if not 'active'",
      }),
    superceded_by: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of another trigger that supercedes this on functionally if this is deprecated',
      }),
    triggers: z
      .array(TriggerSpecSchema)
      .exactOptional()
      .openapi({ description: 'List of the triggers that can fire for this Gate' }),
  })
  .openapi({
    description:
      'A description of the set of gates available in this engine and the triggers and parameters supported',
    required: [],
  })
  .openapi('GateSpec')

const ImageAnalysisReferencesSchema = z
  .array(z.string().openapi({ description: 'Image digest' }))
  .openapi({ description: 'List of image digests to archive' })
  .openapi('ImageAnalysisReferences')

const ImageAnalysisReportSchema = z
  .object({})
  .openapi({ description: 'Analysis report json to be imported' })
  .openapi('ImageAnalysisReport')

const RegistryDigestSourceSchema = z
  .object({
    creation_timestamp_override: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag',
      }),
    dockerfile: z
      .string()
      .regex(/^[a-zA-Z0-9+\/=]+$/)
      .exactOptional()
      .openapi({
        description:
          'Base64 encoded content of the dockerfile used to build the image, if available.',
      }),
    pullstring: z
      .string()
      .openapi({ description: 'A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc)' }),
    tag: z
      .string()
      .openapi({
        description:
          'A valid docker tag reference (e.g. docker.io/nginx:latest) that will be associated with the image but not used to pull the image.',
      }),
  })
  .nullable()
  .openapi({
    description:
      'An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction.',
    required: ['pullstring', 'tag'],
  })
  .openapi('RegistryDigestSource')

const ImportContentDigestsSchema = z
  .object({
    dockerfile: z
      .string()
      .exactOptional()
      .openapi({ description: 'Digest for reference content for dockerfile' }),
    image_config: z
      .string()
      .openapi({ description: 'Digest for reference content for image config' }),
    manifest: z
      .string()
      .openapi({ description: 'Digest to reference content for the image manifest' }),
    packages: z.string().openapi({ description: 'Digest to use for the packages content' }),
    parent_manifest: z
      .string()
      .exactOptional()
      .openapi({ description: 'Digest for reference content for parent manifest' }),
  })
  .openapi({
    description: 'Digest of content to use in the final import',
    required: ['packages', 'manifest', 'image_config'],
  })
  .openapi('ImportContentDigests')

const ImageImportManifestSchema = z
  .object({
    contents: ImportContentDigestsSchema,
    digest: z.string(),
    local_image_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An "imageId" as used by Docker if available' }),
    operation_uuid: z.string(),
    parent_digest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The digest of the images's manifest-list parent if it was accessed from a multi-arch tag where the tag pointed to a manifest-list. This allows preservation of that relationship in the data",
      }),
    tags: z.array(
      z
        .string()
        .openapi({
          description: 'Full docker reference tags',
          example: 'docker.io/library/nginx:latest',
        }),
    ),
  })
  .nullable()
  .openapi({ required: ['tags', 'contents', 'digest', 'operation_uuid'] })
  .openapi('ImageImportManifest')

const RegistryTagSourceSchema = z
  .object({
    dockerfile: z
      .string()
      .regex(/^[a-zA-Z0-9+\/=]+$/)
      .exactOptional()
      .openapi({
        description:
          'Base64 encoded content of the dockerfile used to build the image, if available.',
      }),
    pullstring: z
      .string()
      .openapi({
        description:
          'A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image',
      }),
  })
  .nullable()
  .openapi({
    description:
      'An image reference using a tag in a registry, this is the most common source type.',
    required: ['pullstring'],
  })
  .openapi('RegistryTagSource')

const ImageSourceSchema = z
  .object({
    archive: AnalysisArchiveSourceSchema.exactOptional(),
    digest: RegistryDigestSourceSchema.exactOptional(),
    import: ImageImportManifestSchema.exactOptional(),
    tag: RegistryTagSourceSchema.exactOptional(),
  })
  .openapi({
    description: 'A set of analysis source types. Only one may be set in any given request.',
    required: [],
  })
  .openapi('ImageSource')

const ImageAnalysisRequestSchema = z
  .object({
    annotations: z
      .object({})
      .exactOptional()
      .openapi({
        description: 'Annotations to be associated with the added image in key/value form',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field",
      }),
    digest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field",
      }),
    dockerfile: z
      .string()
      .regex(/^[a-zA-Z0-9+\/=]+$/)
      .exactOptional()
      .openapi({
        description:
          "Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field.",
      }),
    image_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported.',
      }),
    source: ImageSourceSchema.exactOptional(),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field",
      }),
  })
  .openapi({
    description:
      'A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present.',
    required: [],
  })
  .openapi('ImageAnalysisRequest')

const ImageContentDeleteResponseSchema = z.object({}).openapi('ImageContentDeleteResponse')

const ImageFilterSchema = z
  .object({ digest: z.string().exactOptional(), tag: z.string().exactOptional() })
  .openapi({
    description: 'Filter for an image list by id, tag, or digest, but not both',
    required: [],
  })
  .openapi('ImageFilter')

const ImageImportContentResponseSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    digest: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImageImportContentResponse')

const ImageImportOperationSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    expires_at: z.iso.datetime({ offset: true }).exactOptional(),
    status: z
      .enum(['pending', 'queued', 'processing', 'complete', 'failed', 'expired'])
      .exactOptional(),
    uuid: z.string().exactOptional(),
  })
  .openapi({
    description:
      'An import record, creating a unique identifier for referencing the operation as well as its state',
    required: [],
  })
  .openapi('ImageImportOperation')

const ImageImportsSchema = z.array(ImageImportOperationSchema).openapi('ImageImports')

const ImportPackageRelationshipSchema = z
  .looseObject({
    child: z.string(),
    metadata: z.looseObject({}).exactOptional(),
    parent: z.string(),
    type: z.string(),
  })
  .openapi({ required: ['parent', 'child', 'type'] })
  .openapi('ImportPackageRelationship')

const ImportPackageLocationSchema = z
  .looseObject({ layerID: z.string().exactOptional(), path: z.string() })
  .openapi({ required: ['path'] })
  .openapi('ImportPackageLocation')

const ImportPackageSchema = z
  .looseObject({
    cpes: z.array(z.string()),
    foundBy: z.string().exactOptional(),
    id: z.string().exactOptional(),
    language: z.string(),
    licenses: z.array(z.string()),
    locations: z.array(ImportPackageLocationSchema),
    metadata: z.object({}).exactOptional(),
    metadataType: z.string(),
    name: z.string(),
    purl: z.string().exactOptional(),
    type: z.string(),
    version: z.string(),
  })
  .openapi({
    required: [
      'name',
      'version',
      'type',
      'locations',
      'licenses',
      'language',
      'cpes',
      'metadataType',
    ],
  })
  .openapi('ImportPackage')

const ImportDescriptorSchema = z
  .looseObject({ name: z.string(), version: z.string() })
  .openapi({ required: ['name', 'version'] })
  .openapi('ImportDescriptor')

const ImportDistributionSchema = z
  .looseObject({ idLike: z.string(), name: z.string(), version: z.string() })
  .openapi({ required: ['name', 'version', 'idLike'] })
  .openapi('ImportDistribution')

const ImportSchemaSchema = z
  .looseObject({ url: z.string(), version: z.string() })
  .openapi({ required: ['version', 'url'] })
  .openapi('ImportSchema')

const ImportSourceSchema = z
  .looseObject({ target: z.looseObject({}), type: z.string() })
  .openapi({ required: ['type', 'target'] })
  .openapi('ImportSource')

const ImagePackageManifestSchema = z
  .looseObject({
    artifactRelationships: z.array(ImportPackageRelationshipSchema).exactOptional(),
    artifacts: z.array(ImportPackageSchema),
    descriptor: ImportDescriptorSchema.exactOptional(),
    distro: ImportDistributionSchema,
    schema: ImportSchemaSchema.exactOptional(),
    source: ImportSourceSchema,
  })
  .openapi({ required: ['artifacts', 'source', 'distro'] })
  .openapi('ImagePackageManifest')

const ImageRefSchema = z
  .object({ type: z.enum(['tag', 'digest', 'id']), value: z.string() })
  .openapi({ description: 'A reference to an image', required: ['type', 'value'] })
  .openapi('ImageRef')

const ImageReferenceSchema = z
  .object({
    analyzed_at: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine.",
      }),
    digest: z.string().exactOptional().openapi({ description: 'The image digest' }),
    id: z.string().exactOptional().openapi({ description: 'The image id if available' }),
    tag_history: z.array(TagEntrySchema).exactOptional(),
  })
  .openapi({
    description:
      'A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest',
    required: [],
  })
  .openapi('ImageReference')

const ImageSelectionRuleSchema = z
  .object({
    id: z.string().exactOptional(),
    image: ImageRefSchema,
    name: z.string(),
    registry: z.string(),
    repository: z.string(),
  })
  .openapi({ required: ['name', 'registry', 'repository', 'image'] })
  .openapi('ImageSelectionRule')

const PackageReferenceSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Package name' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A version for the package. If null, then references all versions' }),
    will_not_fix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether a vendor will or will not fix a vulnerabitlity' }),
  })
  .openapi({
    description:
      'A record of a software item which is vulnerable or carries a fix for a vulnerability',
    required: [],
  })
  .openapi('PackageReference')

const ImageWithPackagesSchema = z
  .object({
    image: ImageReferenceSchema.exactOptional(),
    packages: z.array(PackageReferenceSchema).exactOptional(),
  })
  .openapi({ description: 'An image record that contains packages', required: [] })
  .openapi('ImageWithPackages')

const ImportContentDigestListSchema = z
  .array(z.string().openapi({ description: 'String digest of an uploaded content' }))
  .openapi('ImportContentDigestList')

const LocalAnalysisSourceSchema = z
  .object({ digest: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalAnalysisSource')

const MappingRuleSchema = z
  .object({
    id: z.string().exactOptional(),
    image: ImageRefSchema,
    name: z.string(),
    policy_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1.',
      }),
    policy_ids: z
      .array(z.string().openapi({ description: 'PolicyId to evaluate' }))
      .exactOptional()
      .openapi({ description: 'List of policyIds to evaluate in order, to completion' }),
    registry: z.string(),
    repository: z.string(),
    whitelist_ids: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['name', 'registry', 'repository', 'image'] })
  .openapi('MappingRule')

const MetadataResponseSchema = z
  .object({
    imageDigest: z.string().exactOptional(),
    metadata: z.any().exactOptional(),
    metadata_type: z.string().exactOptional(),
  })
  .openapi({ description: 'Generic wrapper for metadata listings from images', required: [] })
  .openapi('MetadataResponse')

const NativeSbomSchema = z.object({}).openapi('NativeSbom')

const NvdDataObjectSchema = z
  .object({
    cvss_v2: CVSSV2ScoresSchema.exactOptional(),
    cvss_v3: CVSSV3ScoresSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'NVD Vulnerability ID' }),
  })
  .openapi({ required: [] })
  .openapi('NvdDataObject')

const NvdDataListSchema = z
  .array(NvdDataObjectSchema)
  .openapi({ description: 'List of Nvd Data objects' })
  .openapi('NvdDataList')

const PaginationPropertiesSchema = z
  .object({
    next_page: z
      .string()
      .exactOptional()
      .openapi({
        description: 'True if additional pages exist (page + 1) or False if this is the last page',
      }),
    page: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page number returned (should match the requested page query string param)',
      }),
    returned_count: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of items sent in this response' }),
  })
  .openapi({
    description:
      'Properties for common pagination handling to be included in any wrapping object that needs pagination elements',
    required: [],
  })
  .openapi('PaginationProperties')

const PaginatedImageListSchema = PaginationPropertiesSchema.and(
  z.object({ images: z.array(ImageWithPackagesSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({ description: 'Pagination wrapped list of images that match some filter' })
  .openapi('PaginatedImageList')

const VulnerabilityReferenceSchema = z
  .object({
    source: z.string().exactOptional().openapi({ description: 'The reference source' }),
    tags: z.array(z.string()).exactOptional(),
    url: z.string().exactOptional().openapi({ description: 'The reference url' }),
  })
  .openapi({ description: 'An external link/reference', required: [] })
  .openapi('VulnerabilityReference')

const VendorDataObjectSchema = z
  .object({
    cvss_v2: CVSSV2ScoresSchema.exactOptional(),
    cvss_v3: CVSSV3ScoresSchema.exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'Vendor Vulnerability ID' }),
  })
  .openapi({ required: [] })
  .openapi('VendorDataObject')

const VendorDataListSchema = z
  .array(VendorDataObjectSchema)
  .openapi({ description: 'List of Vendor Data objects' })
  .openapi('VendorDataList')

const StandaloneVulnerabilitySchema = z
  .object({
    affected_packages: z
      .array(PackageReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'The array of packages (typically packages) that are vulnerable-to or provide fixes-for this vulnerability',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the vulnerability if available' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces',
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker)',
      }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE)',
      }),
    nvd_data: NvdDataListSchema.exactOptional(),
    references: z
      .array(VulnerabilityReferenceSchema)
      .exactOptional()
      .openapi({ description: 'List of references including' }),
    severity: z
      .enum(['Unknown', 'Negligible', 'Low', 'Medium', 'High', 'Critical'])
      .exactOptional()
      .openapi({ description: 'Severity label specific to the namepsace' }),
    vendor_data: VendorDataListSchema.exactOptional(),
  })
  .openapi({
    description:
      'A single vulnerability record in a single namespace, the unique key is the combination of the id and namespace',
    required: [],
  })
  .openapi('StandaloneVulnerability')

const PaginatedVulnerabilityListSchema = PaginationPropertiesSchema.and(
  z
    .object({
      vulnerabilities: z
        .array(StandaloneVulnerabilitySchema)
        .exactOptional()
        .openapi({
          description:
            'The listing of matching vulnerabilities for the query subject to pagination',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A paginated listing of vulnerability records sorted by ID in descending order',
  })
  .openapi('PaginatedVulnerabilityList')

const VulnerablePackageReferenceSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Package name' }),
    namespace: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vulnerability namespace of affected package' }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Severity of vulnerability affecting package' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)' }),
    version: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A version for the package. If null, then references all versions' }),
  })
  .openapi({
    description:
      'A record of a software item which is vulnerable or carries a fix for a vulnerability',
    required: [],
  })
  .openapi('VulnerablePackageReference')

const VulnerableImageSchema = z
  .object({
    affected_packages: z.array(VulnerablePackageReferenceSchema).exactOptional(),
    image: ImageReferenceSchema.exactOptional(),
  })
  .openapi({
    description:
      'A record of an image vulnerable to some known vulnerability. Includes vulnerable package information',
    required: [],
  })
  .openapi('VulnerableImage')

const PaginatedVulnerableImageListSchema = PaginationPropertiesSchema.and(
  z.object({ images: z.array(VulnerableImageSchema).exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    description: 'Pagination wrapped list of images with vulnerabilties that match some filter',
  })
  .openapi('PaginatedVulnerableImageList')

const PolicyRuleSchema = z
  .object({
    action: z.enum(['GO', 'STOP', 'WARN']),
    gate: z.string(),
    id: z.string().exactOptional(),
    params: z
      .array(
        z.object({ name: z.string(), value: z.string() }).openapi({ required: ['name', 'value'] }),
      )
      .exactOptional(),
    trigger: z.string(),
  })
  .openapi({
    description:
      'A rule that defines and decision value if the match is found true for a given image.',
    required: ['gate', 'trigger', 'action'],
  })
  .openapi('PolicyRule')

const PolicySchema = z
  .object({
    comment: z.string().exactOptional(),
    id: z.string(),
    name: z.string().exactOptional(),
    rules: z.array(PolicyRuleSchema).exactOptional(),
    version: z.string(),
  })
  .openapi({ required: ['id', 'version'] })
  .openapi('Policy')

const WhitelistItemSchema = z
  .object({
    expires_on: z.iso
      .datetime({ offset: true })
      .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:\:\d+)?[A-Z]?$/)
      .exactOptional(),
    gate: z.string(),
    id: z.string().exactOptional(),
    trigger_id: z.string(),
  })
  .openapi({
    description:
      'Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions',
    required: ['gate', 'trigger_id'],
  })
  .openapi('WhitelistItem')

const WhitelistSchema = z
  .object({
    comment: z.string().exactOptional(),
    id: z.string(),
    items: z.array(WhitelistItemSchema).exactOptional(),
    name: z.string().exactOptional(),
    version: z.string(),
  })
  .openapi({
    description: 'A collection of whitelist items to match a policy evaluation against.',
    required: ['id', 'version'],
  })
  .openapi('Whitelist')

const PolicyBundleSchema = z
  .object({
    blacklisted_images: z
      .array(ImageSelectionRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the bundle, human readable' }),
    id: z.string().openapi({ description: 'Id of the bundle' }),
    mappings: z
      .array(MappingRuleSchema)
      .openapi({
        description:
          'Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Human readable name for the bundle' }),
    policies: z
      .array(PolicySchema)
      .openapi({
        description:
          'Policies which define the go/stop/warn status of an image using rule matches on image properties',
      }),
    version: z.string().openapi({ description: 'Version id for this bundle format' }),
    whitelisted_images: z
      .array(ImageSelectionRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result.',
      }),
    whitelists: z
      .array(WhitelistSchema)
      .exactOptional()
      .openapi({
        description:
          'Whitelists which define which policy matches to disregard explicitly in the final policy decision',
      }),
  })
  .openapi({
    description:
      'A bundle containing a set of policies, whitelists, and rules for mapping them to specific images',
    required: ['id', 'version', 'policies', 'mappings'],
  })
  .openapi('PolicyBundle')

const PolicyBundleRecordSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the bundle is currently defined to be used automatically' }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_updated: z.iso.datetime({ offset: true }).exactOptional(),
    policyId: z.string().exactOptional().openapi({ description: "The bundle's identifier" }),
    policy_source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Source location of where the policy bundle originated' }),
    policybundle: PolicyBundleSchema.exactOptional(),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'UserId of the user that owns the bundle' }),
  })
  .openapi({ description: 'A policy bundle plus some metadata', required: [] })
  .openapi('PolicyBundleRecord')

const PolicyBundleListSchema = z
  .array(PolicyBundleRecordSchema)
  .openapi({ description: 'List of PolicyBundleRecord objects' })
  .openapi('PolicyBundleList')

const PolicyEvalNotificationPayloadSchema = GenericNotificationPayloadSchema.and(
  z
    .object({
      annotations: z
        .object({})
        .nullable()
        .exactOptional()
        .openapi({ description: 'List of Corresponding Image Annotations' }),
      curr_eval: z
        .object({})
        .exactOptional()
        .openapi({ description: 'The Current Policy Evaluation result' }),
      last_eval: z
        .object({})
        .exactOptional()
        .openapi({ description: 'The Previous Policy Evaluation result' }),
    })
    .openapi({ required: [] }),
).openapi('PolicyEvalNotificationPayload')

const PolicyEvalNotificationDataSchema = BaseNotificationDataSchema.and(
  z
    .object({ notification_payload: PolicyEvalNotificationPayloadSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('PolicyEvalNotificationData')

const PolicyEvalNotificationSchema = NotificationBaseSchema.and(
  z
    .object({ data: PolicyEvalNotificationDataSchema.exactOptional() })
    .openapi({
      description: 'The Notification Object definition for Policy Eval Notifications',
      required: [],
    }),
).openapi('PolicyEvalNotification')

const PolicyEvaluationSchema = z
  .object({})
  .openapi({ description: 'Evaluation response object' })
  .openapi('PolicyEvaluation')

const PolicyEvaluationListSchema = z
  .array(PolicyEvaluationSchema)
  .openapi({ description: 'Evaluation response object' })
  .openapi('PolicyEvaluationList')

const RegistryConfigurationSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    last_upated: z.iso.datetime({ offset: true }).exactOptional(),
    registry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'hostname:port string for accessing the registry, as would be used in a docker pull operation',
      }),
    registry_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human readable name associated with registry record' }),
    registry_type: z.string().exactOptional().openapi({ description: 'Type of registry' }),
    registry_user: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username portion of credential to use for this registry' }),
    registry_verify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Use TLS/SSL verification for the registry URL' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Engine user that owns this registry entry' }),
  })
  .openapi({
    description:
      'A registry entry describing the endpoint and credentials for a registry to pull images from',
    required: [],
  })
  .openapi('RegistryConfiguration')

const RegistryConfigurationListSchema = z
  .array(RegistryConfigurationSchema)
  .openapi({ description: 'List of registry configurations' })
  .openapi('RegistryConfigurationList')

const RegistryConfigurationRequestSchema = z
  .object({
    registry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository)',
      }),
    registry_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'human readable name associated with registry record' }),
    registry_pass: z
      .string()
      .exactOptional()
      .openapi({ description: 'Password portion of credential to use for this registry' }),
    registry_type: z.string().exactOptional().openapi({ description: 'Type of registry' }),
    registry_user: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username portion of credential to use for this registry' }),
    registry_verify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Use TLS/SSL verification for the registry URL' }),
  })
  .openapi({
    description: 'A registry record describing the endpoint and credentials for a registry',
    required: [],
  })
  .openapi('RegistryConfigurationRequest')

const RepositoryTagListSchema = z
  .array(z.string())
  .openapi({ description: 'List of discovered tags in a repository' })
  .openapi('RepositoryTagList')

const RetrievedFileSchema = z
  .object({ b64_content: z.string().exactOptional(), path: z.string().exactOptional() })
  .openapi({
    description: 'The retrieved file entry including content (b64 encoded)',
    required: [],
  })
  .openapi('RetrievedFile')

const RetrievedFileListSchema = z
  .array(RetrievedFileSchema)
  .openapi({ description: 'Simple array of RetrievedFileMetadata objects' })
  .openapi('RetrievedFileList')

const SecretSearchResultSchema = z
  .object({
    matches: z.array(RegexContentMatchSchema).exactOptional(),
    path: z.string().exactOptional(),
  })
  .openapi({
    description: 'The retrieved file entry including content (b64 encoded)',
    required: [],
  })
  .openapi('SecretSearchResult')

const SecretSearchListSchema = z
  .array(SecretSearchResultSchema)
  .openapi({ description: 'Simple array of RetrievedFileMetadata objects' })
  .openapi('SecretSearchList')

const StatusResponseSchema = z
  .object({
    available: z.boolean().exactOptional(),
    busy: z.boolean().exactOptional(),
    db_version: z.string().exactOptional(),
    detail: z.object({}).exactOptional(),
    message: z.string().exactOptional(),
    up: z.boolean().exactOptional(),
    version: z.string().exactOptional(),
  })
  .openapi({ description: 'System status response', required: [] })
  .openapi('StatusResponse')

const ServiceSchema = z
  .object({
    base_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to reach the service, including port as needed' }),
    hostid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id of the host on which the service is executing' }),
    service_detail: StatusResponseSchema.exactOptional(),
    servicename: z.string().exactOptional().openapi({ description: 'Registered service name' }),
    status: z.boolean().exactOptional(),
    status_message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A state indicating the condition of the service. Normal operation is 'registered'",
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of the service as reported by the service implementation on registration',
      }),
  })
  .openapi({ description: 'A service status record', required: [] })
  .openapi('Service')

const ServiceListSchema = z
  .array(ServiceSchema)
  .openapi({ description: 'A list of service objects' })
  .openapi('ServiceList')

const ServiceVersionSchema = z
  .object({
    api: z
      .object({
        version: z.string().exactOptional().openapi({ description: 'Semantic version of the api' }),
      })
      .exactOptional()
      .openapi({ description: 'Api Version string', required: [] }),
    db: z
      .object({
        schema_version: z
          .string()
          .exactOptional()
          .openapi({ description: 'Semantic version of the db schema' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    service: z
      .object({
        version: z
          .string()
          .exactOptional()
          .openapi({ description: 'Semantic Version string of the service implementation' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Version information for a service', required: [] })
  .openapi('ServiceVersion')

const SubscriptionSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is the subscription currently active' }),
    subscription_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'the unique id for this subscription record' }),
    subscription_key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key value that the subscription references. E.g. a tag value or a repo name.',
      }),
    subscription_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the subscription' }),
    subscription_value: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The value of the subscription target' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The userId of the subscribed user' }),
  })
  .openapi({ description: 'Subscription entry', required: [] })
  .openapi('Subscription')

const SubscriptionListSchema = z
  .array(SubscriptionSchema)
  .openapi({ description: 'List of subscriptions' })
  .openapi('SubscriptionList')

const SubscriptionRequestSchema = z
  .object({
    subscription_key: z.string().exactOptional(),
    subscription_type: z.string().exactOptional(),
    subscription_value: z.string().nullable().exactOptional(),
  })
  .openapi({ description: 'A subscription entry to add to the system', required: [] })
  .openapi('SubscriptionRequest')

const SubscriptionUpdateSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Toggle the subscription processing on or off' }),
    subscription_value: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The new subscription value, e.g. the new tag to be subscribed to' }),
  })
  .openapi({
    description: 'A modification to a subscription entry to change its status or value',
    required: [],
  })
  .openapi('SubscriptionUpdate')

const SystemStatusResponseSchema = z
  .object({ service_states: ServiceListSchema.exactOptional() })
  .openapi({ description: 'System status response', required: [] })
  .openapi('SystemStatusResponse')

const TagUpdateNotificationPayloadSchema = GenericNotificationPayloadSchema.and(
  z
    .object({
      annotations: z
        .object({})
        .nullable()
        .exactOptional()
        .openapi({ description: 'List of Corresponding Image Annotations' }),
      curr_eval: z
        .array(z.any())
        .exactOptional()
        .openapi({ description: 'A list containing the current image digest' }),
      last_eval: z
        .array(z.any())
        .exactOptional()
        .openapi({ description: 'A list containing the previous image digests' }),
    })
    .openapi({ required: [] }),
).openapi('TagUpdateNotificationPayload')

const TagUpdateNotificationDataSchema = BaseNotificationDataSchema.and(
  z
    .object({ notification_payload: TagUpdateNotificationPayloadSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('TagUpdateNotificationData')

const TagUpdateNotificationSchema = NotificationBaseSchema.and(
  z
    .object({ data: TagUpdateNotificationDataSchema.exactOptional() })
    .openapi({
      description: 'The Notification Object definition for Tag Update Notifications',
      required: [],
    }),
).openapi('TagUpdateNotification')

const TokenResponseSchema = z
  .object({ token: z.string().openapi({ description: 'The token content' }) })
  .openapi({ required: ['token'] })
  .openapi('TokenResponse')

const UserSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestampt the user record was created' }),
    last_updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the last update to this record' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the user is external, this is the source that the user was initialized from. All other user types have this set to null',
      }),
    type: z
      .enum(['native', 'internal', 'external'])
      .exactOptional()
      .openapi({ description: "The user's type" }),
    username: z.string().openapi({ description: 'The username to authenticate with' }),
  })
  .openapi({
    description:
      'A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication.',
    required: ['username'],
  })
  .openapi('User')

const UserCreationRequestSchema = z
  .object({
    password: z
      .string()
      .regex(/.{6,128}$/)
      .openapi({
        description: 'The initial password for the user, must be at least 6 characters, up to 128',
      }),
    username: z
      .string()
      .regex(/^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$/)
      .openapi({ description: 'The username to create' }),
  })
  .openapi({
    description:
      'A payload for creating a new user, includes the username and password in a single request',
    required: ['username', 'password'],
  })
  .openapi('UserCreationRequest')

const UserListSchema = z.array(UserSchema).openapi('UserList')

const VulnDiffResultSchema = z
  .object({
    added: z.array(z.any()).exactOptional(),
    removed: z.array(z.any()).exactOptional(),
    updated: z.array(z.any()).exactOptional(),
  })
  .openapi({
    description: 'The results of the comparing two vulnerability records during an update',
    required: [],
  })
  .openapi('VulnDiffResult')

const VulnUpdateNotificationPayloadSchema = GenericNotificationPayloadSchema.and(
  z
    .object({
      annotations: z
        .object({})
        .nullable()
        .exactOptional()
        .openapi({ description: 'List of Corresponding Image Annotations' }),
      diff_vulnerability_result: VulnDiffResultSchema.exactOptional(),
      imageDigest: z.string().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('VulnUpdateNotificationPayload')

const VulnUpdateNotificationDataSchema = BaseNotificationDataSchema.and(
  z
    .object({ notification_payload: VulnUpdateNotificationPayloadSchema.exactOptional() })
    .openapi({ required: [] }),
).openapi('VulnUpdateNotificationData')

const VulnUpdateNotificationSchema = NotificationBaseSchema.and(
  z
    .object({ data: VulnUpdateNotificationDataSchema.exactOptional() })
    .openapi({
      description: 'The Notification Object definition for Tag Update Notifications',
      required: [],
    }),
).openapi('VulnUpdateNotification')

const VulnerabilitySchema = z
  .object({
    feed: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the feed where vulnerability match was made' }),
    feed_group: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the feed group where vulnerability match was made' }),
    fix: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package containing a fix, if available' }),
    nvd_data: NvdDataListSchema.exactOptional(),
    package: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name and version that are vulnerable in the image' }),
    package_cpe: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CPE string (if applicable) describing the package to vulnerability match',
      }),
    package_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the vulnerable package artifact' }),
    package_path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location (if applicable) of the vulnerable package in the container filesystem',
      }),
    package_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of vulnerable package' }),
    package_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the vulnerable package artifact' }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The severity of the vulnerability' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url for more information about the vulnerability' }),
    vendor_data: VendorDataListSchema.exactOptional(),
    vuln: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123',
      }),
    will_not_fix: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether a vendor will fix or not fix the vulnerability' }),
  })
  .openapi({ required: [] })
  .openapi('Vulnerability')

const VulnerabilityListSchema = z
  .array(VulnerabilitySchema)
  .openapi({ description: 'List of Vulnerability objects' })
  .openapi('VulnerabilityList')

const VulnerabilityResponseSchema = z
  .object({
    imageDigest: z.string().exactOptional(),
    vulnerabilities: VulnerabilityListSchema.exactOptional(),
    vulnerability_type: z.string().exactOptional(),
  })
  .openapi({ description: 'envelope containing list of vulnerabilities', required: [] })
  .openapi('VulnerabilityResponse')

const AsAccountParameterParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An account name to change the resource scope of the request to that account, if permissions allow (admin only)',
      in: 'header',
      name: 'x-anchore-account',
      required: false,
      schema: { type: 'string' },
    },
  })

const AccessCredentialRequestBody = {
  content: { 'application/json': { schema: AccessCredentialSchema } },
  required: true,
}

const RegistryConfigurationRequestRequestBody = {
  content: { 'application/json': { schema: RegistryConfigurationRequestSchema } },
  required: true,
}

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  description: 'Simple status check',
  operationId: 'ping',
  responses: {
    200: {
      description: "Version check response, returns the api version prefix (e.g. 'v1')",
      content: { 'application/json': { schema: z.string() } },
    },
  },
})

export const getAccountRoute = createRoute({
  method: 'get',
  path: '/account',
  tags: ['Identity'],
  summary: 'List the account for the authenticated user',
  operationId: 'get_users_account',
  responses: {
    200: {
      description: "User details for caller's user",
      content: { 'application/json': { schema: AccountSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['User Management'],
  summary: 'List user summaries. Only available to the system admin user.',
  operationId: 'list_accounts',
  request: {
    query: z.object({
      state: z
        .enum(['enabled', 'disabled', 'deleting'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter accounts by state',
            in: 'query',
            name: 'state',
            required: false,
            schema: { enum: ['enabled', 'disabled', 'deleting'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accound summary listing',
      content: { 'application/json': { schema: AccountListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['User Management'],
  summary: 'Create a new user. Only avaialble to admin user.',
  operationId: 'create_account',
  request: {
    body: {
      content: { 'application/json': { schema: AccountCreationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Account Record',
      content: { 'application/json': { schema: AccountSchema } },
    },
    409: {
      description: 'Conflicting user information. User already exists.',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getAccountsAccountnameRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountname}',
  tags: ['User Management'],
  summary:
    'Get info about an user. Only available to admin user. Uses the main user Id, not a username.',
  operationId: 'get_account',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get user information',
      content: { 'application/json': { schema: AccountSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteAccountsAccountnameRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountname}',
  tags: ['User Management'],
  summary:
    'Delete the specified account, only allowed if the account is in the disabled state. All users will be deleted along with the account and all resources will be garbage collected',
  operationId: 'delete_account',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful deletion' },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putAccountsAccountnameStateRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountname}/state',
  tags: ['User Management'],
  summary:
    'Update the state of an account to either enabled or disabled. For deletion use the DELETE route',
  operationId: 'update_account_state',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountStatusSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Updated state of the account',
      content: { 'application/json': { schema: AccountStatusSchema } },
    },
    400: {
      description: 'State requested is invalid based on current state of the account',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getAccountsAccountnameUsersRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountname}/users',
  tags: ['User Management'],
  summary: 'List accounts for the user',
  operationId: 'list_users',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User listing',
      content: {
        'application/json': {
          schema: z.array(UserSchema).openapi({ description: 'List of user credential records' }),
        },
      },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postAccountsAccountnameUsersRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountname}/users',
  tags: ['User Management'],
  summary: 'Create a new user',
  operationId: 'create_user',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UserCreationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Credential summary',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
})

export const getAccountsAccountnameUsersUsernameRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountname}/users/{username}',
  tags: ['User Management'],
  summary: 'Get a specific user in the specified account',
  operationId: 'get_account_user',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'User record', content: { 'application/json': { schema: UserSchema } } },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteAccountsAccountnameUsersUsernameRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountname}/users/{username}',
  tags: ['User Management'],
  summary:
    'Delete a specific user credential by username of the credential. Cannot be the credential used to authenticate the request.',
  operationId: 'delete_user',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    204: { description: 'Deleted credential' },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getAccountsAccountnameUsersUsernameCredentialsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountname}/users/{username}/credentials',
  tags: ['User Management'],
  summary: 'Get current credential summary',
  operationId: 'list_user_credentials',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'User credential listing',
      content: { 'application/json': { schema: CredentialListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postAccountsAccountnameUsersUsernameCredentialsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountname}/users/{username}/credentials',
  tags: ['User Management'],
  summary: 'add/replace credential',
  operationId: 'create_user_credential',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    body: AccessCredentialRequestBody,
  },
  responses: {
    200: {
      description: 'Add a credential, overwritting if already exists',
      content: { 'application/json': { schema: UserSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteAccountsAccountnameUsersUsernameCredentialsRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountname}/users/{username}/credentials',
  tags: ['User Management'],
  summary: 'Delete a credential by type',
  operationId: 'delete_user_credential',
  request: {
    params: z.object({
      accountname: z
        .string()
        .openapi({
          param: { in: 'path', name: 'accountname', required: true, schema: { type: 'string' } },
        }),
      username: z
        .string()
        .openapi({
          param: { in: 'path', name: 'username', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      credential_type: z
        .literal('password')
        .openapi({
          param: {
            in: 'query',
            name: 'credential_type',
            required: true,
            schema: { enum: ['password'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful deletion' },
    400: {
      description: 'Conflict, cannot delete the credential used to authenticate this request',
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getArchivesRoute = createRoute({
  method: 'get',
  path: '/archives',
  tags: ['Archives'],
  operationId: 'list_archives',
  responses: {
    200: {
      description: 'Archive summary listing',
      content: { 'application/json': { schema: ArchiveSummarySchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getArchivesImagesRoute = createRoute({
  method: 'get',
  path: '/archives/images',
  tags: ['Archives'],
  operationId: 'list_analysis_archive',
  responses: {
    200: {
      description:
        'Image analysis archive listing for the requesting account (not the whole system)',
      content: { 'application/json': { schema: ArchivedAnalysesSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postArchivesImagesRoute = createRoute({
  method: 'post',
  path: '/archives/images',
  tags: ['Archives'],
  operationId: 'archive_image_analysis',
  request: {
    body: {
      content: { 'application/json': { schema: ImageAnalysisReferencesSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Archive statuses',
      content: { 'application/json': { schema: AddAnalysisArchiveResultSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getArchivesImagesImageDigestRoute = createRoute({
  method: 'get',
  path: '/archives/images/{imageDigest}',
  tags: ['Archives'],
  description:
    'Returns the archive metadata record identifying the image and tags for the analysis in the archive.',
  operationId: 'get_archived_analysis',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: {
            description: 'The image digest to identify the image analysis',
            in: 'path',
            name: 'imageDigest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Archived Image',
      content: { 'application/json': { schema: ArchivedAnalysisSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteArchivesImagesImageDigestRoute = createRoute({
  method: 'delete',
  path: '/archives/images/{imageDigest}',
  tags: ['Archives'],
  description: 'Performs a synchronous archive deletion',
  operationId: 'delete_archived_analysis',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', required: false, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: { description: 'ArchivdImageAnalysis successfully deleted' },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getArchivesRulesRoute = createRoute({
  method: 'get',
  path: '/archives/rules',
  tags: ['Archives'],
  operationId: 'list_analysis_archive_rules',
  request: {
    query: z.object({
      system_global: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true include system global rules (owned by admin) even for non-admin users. Defaults to true if not set. Can be set to false to exclude globals',
            in: 'query',
            name: 'system_global',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Archive transition rules',
      content: { 'application/json': { schema: AnalysisArchiveRulesSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postArchivesRulesRoute = createRoute({
  method: 'post',
  path: '/archives/rules',
  tags: ['Archives'],
  operationId: 'create_analysis_archive_rule',
  request: {
    body: {
      content: { 'application/json': { schema: AnalysisArchiveTransitionRuleSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Archive transition rule',
      content: { 'application/json': { schema: AnalysisArchiveTransitionRuleSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getArchivesRulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/archives/rules/{ruleId}',
  tags: ['Archives'],
  operationId: 'get_analysis_archive_rule',
  request: {
    params: z.object({
      ruleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ruleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Archive transition rule',
      content: { 'application/json': { schema: AnalysisArchiveTransitionRuleSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteArchivesRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/archives/rules/{ruleId}',
  tags: ['Archives'],
  operationId: 'delete_analysis_archive_rule',
  request: {
    params: z.object({
      ruleId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ruleId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Analysis archive rule succesfuly deleted' },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getEventTypesRoute = createRoute({
  method: 'get',
  path: '/event_types',
  tags: ['Events'],
  summary: 'List Event Types',
  description: 'Returns list of event types in the category hierarchy',
  operationId: 'list_event_types',
  responses: {
    200: {
      description: 'List of event types',
      content: { 'application/json': { schema: EventTypesListSchema } },
    },
  },
})

export const getEventsRoute = createRoute({
  method: 'get',
  path: '/events',
  tags: ['Events'],
  summary: 'List Events',
  description:
    'Returns a paginated list of events in the descending order of their occurrence. Optional query parameters may be used for filtering results',
  operationId: 'list_events',
  request: {
    query: z.object({
      source_servicename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by the originating service',
            in: 'query',
            name: 'source_servicename',
            required: false,
            schema: { type: 'string' },
          },
        }),
      source_hostid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by the originating host ID',
            in: 'query',
            name: 'source_hostid',
            required: false,
            schema: { type: 'string' },
          },
        }),
      event_type: z
        .string()
        .regex(/^[a-z0-9-_.*]+$/)
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by a prefix match on the event type (e.g. "user.image.")',
            in: 'query',
            name: 'event_type',
            required: false,
            schema: { pattern: '^[a-z0-9-_.*]+$', type: 'string' },
          },
        }),
      resource_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by the type of resource - tag, imageDigest, repository etc',
            in: 'query',
            name: 'resource_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      resource_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by the id of the resource',
            in: 'query',
            name: 'resource_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      level: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter events by the level - INFO or ERROR',
            in: 'query',
            name: 'level',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return events that occurred after the timestamp',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Return events that occurred before the timestamp',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Pagination controls - return the nth page of results. Defaults to first page if left empty',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'Number of events in the result set. Defaults to 100 if left empty',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { default: 100, type: 'integer' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Paginated list of event records and the next token',
      content: { 'application/json': { schema: EventsListSchema } },
    },
  },
})

export const deleteEventsRoute = createRoute({
  method: 'delete',
  path: '/events',
  tags: ['Events'],
  summary: 'Delete Events',
  description: 'Delete all or a subset of events filtered using the optional query parameters',
  operationId: 'delete_events',
  request: {
    query: z.object({
      before: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Delete events that occurred before the timestamp',
            in: 'query',
            name: 'before',
            required: false,
            schema: { type: 'string' },
          },
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Delete events that occurred after the timestamp',
            in: 'query',
            name: 'since',
            required: false,
            schema: { type: 'string' },
          },
        }),
      level: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Delete events that match the level - INFO or ERROR',
            in: 'query',
            name: 'level',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'List of deleted event IDs',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getEventsEventIdRoute = createRoute({
  method: 'get',
  path: '/events/{eventId}',
  tags: ['Events'],
  summary: 'Get Event',
  description: 'Lookup an event by its event ID',
  operationId: 'get_event',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'Event ID of the event for lookup',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Single event record',
      content: { 'application/json': { schema: EventResponseSchema } },
    },
  },
})

export const deleteEventsEventIdRoute = createRoute({
  method: 'delete',
  path: '/events/{eventId}',
  tags: ['Events'],
  summary: 'Delete Event',
  description: 'Delete an event by its event ID',
  operationId: 'delete_event',
  request: {
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'Event ID of the event to be deleted',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: { 200: { description: 'Delete success' } },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  description: 'Health check, returns 200 and no body if service is running',
  operationId: 'health_check',
  responses: { 200: { description: 'Empty body on success' } },
})

export const getImagesRoute = createRoute({
  method: 'get',
  path: '/images',
  tags: ['Images'],
  summary: 'List all visible images',
  description: 'List all images visible to the user',
  operationId: 'list_images',
  request: {
    query: z.object({
      history: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Include image history in the response',
            in: 'query',
            name: 'history',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      fulltag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)',
            in: 'query',
            name: 'fulltag',
            required: false,
            schema: { type: 'string' },
          },
        }),
      image_status: z
        .enum(['all', 'active', 'deleting'])
        .default('active')
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter by image_status value on the record. Default if omitted is 'active'.",
            in: 'query',
            name: 'image_status',
            required: false,
            schema: { default: 'active', enum: ['all', 'active', 'deleting'], type: 'string' },
          },
        }),
      analysis_status: z
        .enum(['not_analyzed', 'analyzed', 'analyzing', 'analysis_failed'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter by analysis_status value on the record.',
            in: 'query',
            name: 'analysis_status',
            required: false,
            schema: {
              enum: ['not_analyzed', 'analyzed', 'analyzing', 'analysis_failed'],
              type: 'string',
            },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AnchoreImageListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postImagesRoute = createRoute({
  method: 'post',
  path: '/images',
  tags: ['Images'],
  summary: 'Submit a new image for analysis by the engine',
  description: 'Creates a new analysis task that is executed asynchronously',
  operationId: 'add_image',
  request: {
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Override any existing entry in the system',
            in: 'query',
            name: 'force',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      autosubscribe: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Instruct engine to automatically begin watching the added tag for updates from registry',
            in: 'query',
            name: 'autosubscribe',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: ImageAnalysisRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully added image to analysis queue',
      content: { 'application/json': { schema: AnchoreImageListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteImagesRoute = createRoute({
  method: 'delete',
  path: '/images',
  tags: ['Images'],
  summary: 'Bulk mark images for deletion',
  description: 'Delete analysis for image digests in the list asynchronously',
  operationId: 'delete_images_async',
  request: {
    query: z.object({
      imageDigests: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            explode: false,
            in: 'query',
            name: 'imageDigests',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            'x-nullable': false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', required: false, schema: { type: 'boolean' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: DeleteImageResponseListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}',
  tags: ['Images'],
  summary: 'Lookup image by docker imageId',
  operationId: 'get_image_by_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image lookup success',
      content: { 'application/json': { schema: AnchoreImageListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteImagesByIdImageIdRoute = createRoute({
  method: 'delete',
  path: '/images/by_id/{imageId}',
  tags: ['Images'],
  summary: 'Delete image by docker imageId',
  operationId: 'delete_image_by_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', required: false, schema: { type: 'boolean' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image deletion success',
      content: { 'application/json': { schema: DeleteImageResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdCheckRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/check',
  tags: ['Images'],
  summary: 'Check policy evaluation status for image',
  description: 'Get the policy evaluation for the given image',
  operationId: 'get_image_policy_check_by_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      policyId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'policyId', required: false, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'query', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'detail', required: false, schema: { type: 'boolean' } },
        }),
      history: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'history', required: false, schema: { type: 'boolean' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Policy evaluation success',
      content: { 'application/json': { schema: PolicyEvaluationListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdContentRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/content',
  tags: ['Images'],
  summary: 'List image content types',
  operationId: 'list_image_content_by_imageid',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdContentFilesRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/content/files',
  tags: ['Images'],
  summary: 'Get the content of an image by type files',
  operationId: 'get_image_content_by_type_imageId_files',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentFilesResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdContentJavaRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/content/java',
  tags: ['Images'],
  summary: 'Get the content of an image by type java',
  operationId: 'get_image_content_by_type_imageId_javapackage',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentJAVAPackageResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdContentCtypeRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/content/{ctype}',
  tags: ['Images'],
  summary: 'Get the content of an image by type',
  operationId: 'get_image_content_by_type_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
      ctype: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ctype', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentPackageResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdVulnRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/vuln',
  tags: ['Images'],
  summary: 'Get vulnerability types',
  operationId: 'get_image_vulnerability_types_by_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Vulnerability listing for the image',
      content: { 'application/json': { schema: z.array(z.enum(['all', 'os', 'non-os'])) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesByIdImageIdVulnVtypeRoute = createRoute({
  method: 'get',
  path: '/images/by_id/{imageId}/vuln/{vtype}',
  tags: ['Images'],
  summary: 'Get vulnerabilities by type',
  operationId: 'get_image_vulnerabilities_by_type_imageId',
  request: {
    params: z.object({
      imageId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageId', required: true, schema: { type: 'string' } },
        }),
      vtype: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vtype', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Vulnerability listing for the image',
      content: { 'application/json': { schema: VulnerabilityResponseSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}',
  tags: ['Images'],
  summary: 'Get image metadata',
  operationId: 'get_image',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image lookup success',
      content: { 'application/json': { schema: AnchoreImageListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteImagesImageDigestRoute = createRoute({
  method: 'delete',
  path: '/images/{imageDigest}',
  tags: ['Images'],
  summary: 'Delete an image analysis',
  operationId: 'delete_image',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'force', required: false, schema: { type: 'boolean' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image deletion success',
      content: { 'application/json': { schema: DeleteImageResponseSchema } },
    },
  },
})

export const getImagesImageDigestArtifactsFileContentSearchRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/artifacts/file_content_search',
  summary: 'Return a list of analyzer artifacts of the specified type',
  operationId: 'list_file_content_search_results',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of file metadata objects',
      content: { 'application/json': { schema: FileContentSearchListSchema } },
    },
    404: { description: 'Image not found in this service' },
  },
})

export const getImagesImageDigestArtifactsRetrievedFilesRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/artifacts/retrieved_files',
  summary: 'Return a list of analyzer artifacts of the specified type',
  operationId: 'list_retrieved_files',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of file metadata objects',
      content: { 'application/json': { schema: RetrievedFileListSchema } },
    },
    404: { description: 'Image not found in this service' },
  },
})

export const getImagesImageDigestArtifactsSecretSearchRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/artifacts/secret_search',
  summary: 'Return a list of analyzer artifacts of the specified type',
  operationId: 'list_secret_search_results',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of file metadata objects',
      content: { 'application/json': { schema: SecretSearchListSchema } },
    },
    404: { description: 'Image not found in this service' },
  },
})

export const getImagesImageDigestCheckRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/check',
  tags: ['Images'],
  summary: 'Check policy evaluation status for image',
  description: 'Get the policy evaluation for the given image',
  operationId: 'get_image_policy_check',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      policyId: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'policyId', required: false, schema: { type: 'string' } },
        }),
      tag: z
        .string()
        .openapi({
          param: { in: 'query', name: 'tag', required: true, schema: { type: 'string' } },
        }),
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'detail', required: false, schema: { type: 'boolean' } },
        }),
      history: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'history', required: false, schema: { type: 'boolean' } },
        }),
      interactive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'interactive', required: false, schema: { type: 'boolean' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Policy evaluation success',
      content: { 'application/json': { schema: PolicyEvaluationListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestContentRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/content',
  tags: ['Images'],
  summary: 'List image content types',
  operationId: 'list_image_content',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content listing for the image',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestContentFilesRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/content/files',
  tags: ['Images'],
  summary: 'Get the content of an image by type files',
  operationId: 'get_image_content_by_type_files',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentFilesResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestContentJavaRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/content/java',
  tags: ['Images'],
  summary: 'Get the content of an image by type java',
  operationId: 'get_image_content_by_type_javapackage',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentJAVAPackageResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestContentMalwareRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/content/malware',
  tags: ['Images'],
  summary: 'Get the content of an image by type malware',
  operationId: 'get_image_content_by_type_malware',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentMalwareResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestContentCtypeRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/content/{ctype}',
  tags: ['Images'],
  summary: 'Get the content of an image by type',
  operationId: 'get_image_content_by_type',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
      ctype: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ctype', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Content of specified type from the image',
      content: { 'application/json': { schema: ContentPackageResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestMetadataRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/metadata',
  tags: ['Images'],
  summary: 'List image metadata types',
  operationId: 'list_image_metadata',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Metadata listing for the image',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestMetadataMtypeRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/metadata/{mtype}',
  tags: ['Images'],
  summary: 'Get the metadata of an image by type',
  operationId: 'get_image_metadata_by_type',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
      mtype: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mtype', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Metadata of specified type from the image',
      content: { 'application/json': { schema: MetadataResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestSbomsNativeRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/sboms/native',
  tags: ['Images'],
  summary: 'Get image sbom in the native Anchore format',
  operationId: 'get_image_sbom_native',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image lookup success',
      content: {
        'application/gzip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    500: {
      description: 'Internal error',
      content: { 'application/gzip': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestVulnRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/vuln',
  tags: ['Images'],
  summary: 'Get vulnerability types',
  operationId: 'get_image_vulnerability_types',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Vulnerability listing for the image',
      content: { 'application/json': { schema: z.array(z.enum(['all', 'os', 'non-os'])) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImagesImageDigestVulnVtypeRoute = createRoute({
  method: 'get',
  path: '/images/{imageDigest}/vuln/{vtype}',
  tags: ['Images'],
  summary: 'Get vulnerabilities by type',
  operationId: 'get_image_vulnerabilities_by_type',
  request: {
    params: z.object({
      imageDigest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'imageDigest', required: true, schema: { type: 'string' } },
        }),
      vtype: z
        .string()
        .openapi({
          param: { in: 'path', name: 'vtype', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      force_refresh: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'force_refresh',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      vendor_only: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data. When set to true, it will filter out all vulnerabilities where `will_not_fix` is False. If false all vulnerabilities are returned regardless of `will_not_fix`',
            in: 'query',
            name: 'vendor_only',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Vulnerability listing for the image',
      content: { 'application/json': { schema: VulnerabilityResponseSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postImportImagesRoute = createRoute({
  method: 'post',
  path: '/import/images',
  tags: ['Import'],
  summary:
    'Import an anchore image tar.gz archive file. This is a deprecated API replaced by the "/imports/images" route',
  operationId: 'import_image_archive',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              archive_file: z
                .file()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'anchore image tar archive.',
                }),
            })
            .openapi({ required: ['archive_file'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully imported image to the engine',
      content: { 'application/json': { schema: AnchoreImageListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getImportsImagesRoute = createRoute({
  method: 'get',
  path: '/imports/images',
  tags: ['Imports'],
  summary: 'Lists in-progress imports',
  operationId: 'list_operations',
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportsSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesRoute = createRoute({
  method: 'post',
  path: '/imports/images',
  tags: ['Imports'],
  summary: 'Begin the import of an image analyzed by Syft into the system',
  operationId: 'create_operation',
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportOperationSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}',
  tags: ['Imports'],
  summary: 'Get detail on a single import',
  operationId: 'get_operation',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportOperationSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const deleteImportsImagesOperationIdRoute = createRoute({
  method: 'delete',
  path: '/imports/images/{operation_id}',
  tags: ['Imports'],
  summary: 'Invalidate operation ID so it can be garbage collected',
  operationId: 'invalidate_operation',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportOperationSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdDockerfileRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}/dockerfile',
  tags: ['Imports'],
  summary: 'List uploaded dockerfiles',
  operationId: 'list_import_dockerfiles',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImportContentDigestListSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesOperationIdDockerfileRoute = createRoute({
  method: 'post',
  path: '/imports/images/{operation_id}/dockerfile',
  tags: ['Imports'],
  summary: 'Begin the import of an image analyzed by Syft into the system',
  operationId: 'import_image_dockerfile',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'text/plain; utf-8': { schema: z.string() } }, required: true },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportContentResponseSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdImageConfigRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}/image_config',
  tags: ['Imports'],
  summary: 'List uploaded image configs',
  operationId: 'list_import_image_configs',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImportContentDigestListSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesOperationIdImageConfigRoute = createRoute({
  method: 'post',
  path: '/imports/images/{operation_id}/image_config',
  tags: ['Imports'],
  summary: 'Import a docker or OCI image config to associate with the image',
  operationId: 'import_image_config',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: z.object({}) } }, required: true },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportContentResponseSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdManifestRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}/manifest',
  tags: ['Imports'],
  summary: 'List uploaded image manifests',
  operationId: 'list_import_image_manifests',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImportContentDigestListSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesOperationIdManifestRoute = createRoute({
  method: 'post',
  path: '/imports/images/{operation_id}/manifest',
  tags: ['Imports'],
  summary: 'Import a docker or OCI distribution manifest to associate with the image',
  operationId: 'import_image_manifest',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/vnd.docker.distribution.manifest.v1+json': { schema: z.object({}) },
        'application/vnd.docker.distribution.manifest.v1+prettyjws': { schema: z.object({}) },
        'application/vnd.docker.distribution.manifest.v2+json': { schema: z.object({}) },
        'application/vnd.oci.image.manifest.v1+json': { schema: z.object({}) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportContentResponseSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdPackagesRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}/packages',
  tags: ['Imports'],
  summary: 'List uploaded package manifests',
  operationId: 'list_import_packages',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImportContentDigestListSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesOperationIdPackagesRoute = createRoute({
  method: 'post',
  path: '/imports/images/{operation_id}/packages',
  tags: ['Imports'],
  summary: 'Begin the import of an image analyzed by Syft into the system',
  operationId: 'import_image_packages',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImagePackageManifestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportContentResponseSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const getImportsImagesOperationIdParentManifestRoute = createRoute({
  method: 'get',
  path: '/imports/images/{operation_id}/parent_manifest',
  tags: ['Imports'],
  summary: 'List uploaded parent manifests (manifest lists for a tag)',
  operationId: 'list_import_parent_manifests',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImportContentDigestListSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postImportsImagesOperationIdParentManifestRoute = createRoute({
  method: 'post',
  path: '/imports/images/{operation_id}/parent_manifest',
  tags: ['Imports'],
  summary: 'Import a docker or OCI distribution manifest list to associate with the image',
  operationId: 'import_image_parent_manifest',
  request: {
    params: z.object({
      operation_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'operation_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/vnd.docker.distribution.manifest.list.v2+json': { schema: z.object({}) },
        'application/vnd.oci.image.index.v1+json': { schema: z.object({}) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: ImageImportContentResponseSchema } },
    },
    500: { description: 'Internal Error' },
  },
})

export const postOauthTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/token',
  description:
    'Request a jwt token for subsequent operations, this request is authenticated with normal HTTP auth',
  operationId: 'get_oauth_token',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z
                .string()
                .default('anonymous')
                .exactOptional()
                .openapi({ description: 'The type of client used for the OAuth token' }),
              grant_type: z
                .string()
                .default('password')
                .exactOptional()
                .openapi({ description: 'OAuth Grant type for token' }),
              password: z
                .string()
                .exactOptional()
                .openapi({ description: 'Password for corresponding user' }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'User to assign OAuth token to' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Resulting JWT token',
      content: { 'application/json': { schema: TokenResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getPoliciesRoute = createRoute({
  method: 'get',
  path: '/policies',
  tags: ['Policies'],
  summary: 'List policies',
  description: 'List all saved policy bundles',
  operationId: 'list_policies',
  request: {
    query: z.object({
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include policy bundle detail in the form of the full bundle content for each entry',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Policy listing',
      content: { 'application/json': { schema: PolicyBundleListSchema } },
    },
  },
})

export const postPoliciesRoute = createRoute({
  method: 'post',
  path: '/policies',
  tags: ['Policies'],
  summary: 'Add a new policy',
  description: 'Adds a new policy bundle to the system',
  operationId: 'add_policy',
  request: {
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: { content: { 'application/json': { schema: PolicyBundleSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Saved bundle',
      content: { 'application/json': { schema: PolicyBundleRecordSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getPoliciesPolicyIdRoute = createRoute({
  method: 'get',
  path: '/policies/{policyId}',
  tags: ['Policies'],
  summary: 'Get specific policy',
  description: 'Get the policy bundle content',
  operationId: 'get_policy',
  request: {
    params: z.object({
      policyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'policyId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      detail: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Include policy bundle detail in the form of the full bundle content for each entry',
            in: 'query',
            name: 'detail',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'A list with a single fetched policy bundle record',
      content: { 'application/json': { schema: PolicyBundleListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putPoliciesPolicyIdRoute = createRoute({
  method: 'put',
  path: '/policies/{policyId}',
  tags: ['Policies'],
  summary: 'Update policy',
  description: 'Update/replace and existing policy',
  operationId: 'update_policy',
  request: {
    params: z.object({
      policyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'policyId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Mark policy as active',
            in: 'query',
            name: 'active',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: { content: { 'application/json': { schema: PolicyBundleRecordSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'A list with a single updated policy bundle record',
      content: { 'application/json': { schema: PolicyBundleListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deletePoliciesPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/policies/{policyId}',
  tags: ['Policies'],
  summary: 'Delete policy',
  description: 'Delete the specified policy',
  operationId: 'delete_policy',
  request: {
    params: z.object({
      policyId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'policyId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: { description: 'Delete success' },
    404: {
      description: 'Policy not found to delete',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getQueryImagesByPackageRoute = createRoute({
  method: 'get',
  path: '/query/images/by_package',
  tags: ['Query'],
  summary: 'List of images containing given package',
  description: 'Filterable query interface to search for images containing specified package',
  operationId: 'query_images_by_package',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Name of package to search for (e.g. sed)',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      package_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of package to filter on (e.g. dpkg)',
            in: 'query',
            name: 'package_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
      version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Version of named package to filter on (e.g. 4.4-1)',
            in: 'query',
            name: 'version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to fetch. Pages start at 1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image listing',
      content: { 'application/json': { schema: PaginatedImageListSchema } },
    },
    400: {
      description: 'Bad filter parameters',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getQueryImagesByVulnerabilityRoute = createRoute({
  method: 'get',
  path: '/query/images/by_vulnerability',
  tags: ['Query'],
  summary: 'List images vulnerable to the specific vulnerability ID.',
  description:
    'Returns a listing of images and their respective packages vulnerable to the given vulnerability ID',
  operationId: 'query_images_by_vulnerability',
  request: {
    query: z.object({
      vulnerability_id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the vulnerability to search for within all images stored in anchore-engine (e.g. CVE-1999-0001)',
            in: 'query',
            name: 'vulnerability_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      namespace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to images within the given vulnerability namespace (e.g. debian:8, ubuntu:14.04)',
            in: 'query',
            name: 'namespace',
            required: false,
            schema: { type: 'string' },
          },
        }),
      affected_package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to images with vulnable packages with the given package name (e.g. libssl)',
            in: 'query',
            name: 'affected_package',
            required: false,
            schema: { type: 'string' },
          },
        }),
      severity: z
        .enum(['Unknown', 'Negligible', 'Low', 'Medium', 'High', 'Critical'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to vulnerable package/vulnerability with the given severity',
            in: 'query',
            name: 'severity',
            required: false,
            schema: {
              enum: ['Unknown', 'Negligible', 'Low', 'Medium', 'High', 'Critical'],
              type: 'string',
            },
          },
        }),
      vendor_only: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data',
            in: 'query',
            name: 'vendor_only',
            required: false,
            schema: { default: true, type: 'boolean' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to fetch. Pages start at 1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Image lookup success',
      content: { 'application/json': { schema: PaginatedVulnerableImageListSchema } },
    },
    400: {
      description: 'Invalid filter parameters',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getQueryVulnerabilitiesRoute = createRoute({
  method: 'get',
  path: '/query/vulnerabilities',
  tags: ['Query'],
  summary: 'Listing information about given vulnerability',
  description:
    'List (w/filters) vulnerability records known by the system, with affected packages information if present',
  operationId: 'query_vulnerabilities',
  request: {
    query: z.object({
      id: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'The ID of the vulnerability (e.g. CVE-1999-0001)',
            explode: false,
            in: 'query',
            name: 'id',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
      affected_package: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by specified package name (e.g. sed)',
            in: 'query',
            name: 'affected_package',
            required: false,
            schema: { type: 'string' },
          },
        }),
      affected_package_version: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter results by specified package version (e.g. 4.4-1)',
            in: 'query',
            name: 'affected_package_version',
            required: false,
            schema: { type: 'string' },
          },
        }),
      page: z
        .string()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description: 'The page of results to fetch. Pages start at 1',
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: '1', type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      namespace: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Namespace(s) to filter vulnerability records by',
            explode: false,
            in: 'query',
            name: 'namespace',
            required: false,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Vulnerability listing paginated',
      content: { 'application/json': { schema: PaginatedVulnerabilityListSchema } },
    },
    400: {
      description: 'Invalid filter parameters',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getRegistriesRoute = createRoute({
  method: 'get',
  path: '/registries',
  tags: ['Registries'],
  summary: 'List configured registries',
  description: 'List all configured registries the system can/will watch',
  operationId: 'list_registries',
  request: { headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }) },
  responses: {
    200: {
      description: 'Registry listing',
      content: { 'application/json': { schema: RegistryConfigurationListSchema } },
    },
  },
})

export const postRegistriesRoute = createRoute({
  method: 'post',
  path: '/registries',
  tags: ['Registries'],
  summary: 'Add a new registry',
  description: 'Adds a new registry to the system',
  operationId: 'create_registry',
  request: {
    query: z.object({
      validate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'flag to determine whether or not to validate registry/credential at registry add time',
            in: 'query',
            name: 'validate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: RegistryConfigurationRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Saved registry configuration',
      content: { 'application/json': { schema: RegistryConfigurationListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getRegistriesRegistryRoute = createRoute({
  method: 'get',
  path: '/registries/{registry}',
  tags: ['Registries'],
  summary: 'Get a specific registry configuration',
  description: 'Get information on a specific registry',
  operationId: 'get_registry',
  request: {
    params: z.object({
      registry: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'registry',
            required: true,
            schema: { format: 'path', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Registry configuration',
      content: { 'application/json': { schema: RegistryConfigurationListSchema } },
    },
  },
})

export const putRegistriesRegistryRoute = createRoute({
  method: 'put',
  path: '/registries/{registry}',
  tags: ['Registries'],
  summary: 'Update/replace a registry configuration',
  description: 'Replaces an existing registry record with the given record',
  operationId: 'update_registry',
  request: {
    params: z.object({
      registry: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'registry',
            required: true,
            schema: { format: 'path', type: 'string' },
          },
        }),
    }),
    query: z.object({
      validate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'flag to determine whether or not to validate registry/credential at registry update time',
            in: 'query',
            name: 'validate',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: RegistryConfigurationRequestRequestBody,
  },
  responses: {
    200: {
      description: 'Updated registry configuration',
      content: { 'application/json': { schema: RegistryConfigurationListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteRegistriesRegistryRoute = createRoute({
  method: 'delete',
  path: '/registries/{registry}',
  tags: ['Registries'],
  summary: 'Delete a registry configuration',
  description:
    'Delete a registry configuration record from the system. Does not remove any images.',
  operationId: 'delete_registry',
  request: {
    params: z.object({
      registry: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'registry',
            required: true,
            schema: { format: 'path', type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: { description: 'Delete success' },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postRepositoriesRoute = createRoute({
  method: 'post',
  path: '/repositories',
  tags: ['Repository Credentials'],
  summary: 'Add repository to watch',
  operationId: 'add_repository',
  request: {
    query: z.object({
      repository: z
        .string()
        .openapi({
          param: {
            description: 'full repository to add e.g. docker.io/library/alpine',
            in: 'query',
            name: 'repository',
            required: true,
            schema: { type: 'string' },
          },
        }),
      autosubscribe: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'flag to enable/disable auto tag_update activation when new images from a repo are added',
            in: 'query',
            name: 'autosubscribe',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      dryrun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'flag to return tags in the repository without actually watching the repository, default is false',
            in: 'query',
            name: 'dryrun',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Repository and discovered tags added',
      content: { 'application/json': { schema: SubscriptionListSchema } },
    },
  },
})

export const getStatusRoute = createRoute({
  method: 'get',
  path: '/status',
  tags: ['System'],
  summary: 'Service status',
  description: 'Get the API service status',
  operationId: 'get_status',
  responses: {
    200: {
      description: 'Status listing',
      content: { 'application/json': { schema: StatusResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['Subscriptions'],
  summary: 'List all subscriptions',
  operationId: 'list_subscriptions',
  request: {
    query: z.object({
      subscription_key: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter only subscriptions matching key',
            in: 'query',
            name: 'subscription_key',
            required: false,
            schema: { type: 'string' },
          },
        }),
      subscription_type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'filter only subscriptions matching type',
            in: 'query',
            name: 'subscription_type',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Subscription listing',
      content: { 'application/json': { schema: SubscriptionListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/subscriptions',
  tags: ['Subscriptions'],
  summary: 'Add a subscription of a specific type',
  description: 'Create a new subscription to watch a tag and get notifications of changes',
  operationId: 'add_subscription',
  request: {
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: {
      content: { 'application/json': { schema: SubscriptionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subscription add success',
      content: { 'application/json': { schema: SubscriptionListSchema } },
    },
  },
})

export const getSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Get a specific subscription set',
  operationId: 'get_subscription',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'Filtered subscription list by type',
      content: { 'application/json': { schema: SubscriptionListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'put',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Update an existing and specific subscription',
  operationId: 'update_subscription',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
    body: { content: { 'application/json': { schema: SubscriptionUpdateSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Subscription add success',
      content: { 'application/json': { schema: SubscriptionListSchema } },
    },
  },
})

export const deleteSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'delete',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Delete subscriptions of a specific type',
  operationId: 'delete_subscription',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subscriptionId', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: { description: 'Delete success' },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSummariesImagetagsRoute = createRoute({
  method: 'get',
  path: '/summaries/imagetags',
  tags: ['Summaries'],
  summary: 'List all visible image digests and tags',
  description: 'List all image tags visible to the user',
  operationId: 'list_imagetags',
  request: {
    query: z.object({
      image_status: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['all', 'active', 'deleting'])),
        )
        .default(['active'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter images in one or more states such as active, deleting. Defaults to active images only if unspecified',
            explode: false,
            in: 'query',
            name: 'image_status',
            required: false,
            schema: {
              default: ['active'],
              items: { enum: ['all', 'active', 'deleting'], type: 'string' },
              type: 'array',
            },
            style: 'form',
          },
        }),
    }),
    headers: z.object({ 'x-anchore-account': AsAccountParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: AnchoreImageTagSummaryListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSystemRoute = createRoute({
  method: 'get',
  path: '/system',
  tags: ['System'],
  summary: 'System status',
  description: 'Get the system status including queue lengths',
  operationId: 'get_service_detail',
  responses: {
    200: {
      description: 'Status listing',
      content: { 'application/json': { schema: SystemStatusResponseSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSystemErrorCodesRoute = createRoute({
  method: 'get',
  path: '/system/error_codes',
  tags: ['System'],
  summary: 'Describe anchore engine error codes.',
  description: 'Describe anchore engine error codes.',
  operationId: 'describe_error_codes',
  responses: {
    200: {
      description: 'Error Codes Description',
      content: {
        'application/json': {
          schema: z
            .array(AnchoreErrorCodeSchema)
            .openapi({ description: 'List of Error Code Descriptions' }),
        },
      },
    },
  },
})

export const getSystemFeedsRoute = createRoute({
  method: 'get',
  path: '/system/feeds',
  tags: ['System'],
  summary: 'list feeds operations and information',
  description:
    'Return a list of feed and their groups along with update and record count information. This data reflects the state of the policy engine, not the upstream feed service itself.',
  operationId: 'get_system_feeds',
  responses: {
    200: {
      description: 'success',
      content: { 'application/json': { schema: z.array(FeedMetadataSchema) } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postSystemFeedsRoute = createRoute({
  method: 'post',
  path: '/system/feeds',
  tags: ['System'],
  summary: 'trigger feeds operations',
  description:
    'Execute a synchronous feed sync operation. The response will block until complete, then return the result summary.',
  operationId: 'post_system_feeds',
  request: {
    query: z.object({
      flush: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'instruct system to flush existing data feeds records from anchore-engine',
            in: 'query',
            name: 'flush',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      sync: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'instruct system to re-sync data feeds',
            in: 'query',
            name: 'sync',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Feeds operation success',
      content: { 'application/json': { schema: FeedSyncResultsSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const putSystemFeedsFeedRoute = createRoute({
  method: 'put',
  path: '/system/feeds/{feed}',
  tags: ['System'],
  description: 'Disable the feed so that it does not sync on subsequent sync operations',
  operationId: 'toggle_feed_enabled',
  request: {
    params: z.object({
      feed: z
        .string()
        .openapi({
          param: { in: 'path', name: 'feed', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      enabled: z
        .stringbool()
        .openapi({
          param: { in: 'query', name: 'enabled', required: true, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'FeedInfo',
      content: { 'application/json': { schema: FeedMetadataSchema } },
    },
    400: { description: 'Bad request, fix and resend' },
    500: { description: 'Internal server error processing the request. Retry expected' },
  },
})

export const deleteSystemFeedsFeedRoute = createRoute({
  method: 'delete',
  path: '/system/feeds/{feed}',
  tags: ['System'],
  description: 'Delete the groups and data for the feed and disable the feed itself',
  operationId: 'delete_feed',
  request: {
    params: z.object({
      feed: z
        .string()
        .openapi({
          param: { in: 'path', name: 'feed', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Successfully deleted' },
    404: { description: 'Not found' },
    500: { description: 'Internal server error processing the request. Retry expected' },
  },
})

export const putSystemFeedsFeedGroupRoute = createRoute({
  method: 'put',
  path: '/system/feeds/{feed}/{group}',
  tags: ['System'],
  description: 'Disable a specific group within a feed to not sync',
  operationId: 'toggle_group_enabled',
  request: {
    params: z.object({
      feed: z
        .string()
        .openapi({
          param: { in: 'path', name: 'feed', required: true, schema: { type: 'string' } },
        }),
      group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'group', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      enabled: z
        .stringbool()
        .openapi({
          param: { in: 'query', name: 'enabled', required: true, schema: { type: 'boolean' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'FeedInfo listing',
      content: { 'application/json': { schema: z.array(FeedMetadataSchema) } },
    },
    400: { description: 'Bad request, fix and resend' },
    500: { description: 'Internal server error processing the request. Retry expected' },
  },
})

export const deleteSystemFeedsFeedGroupRoute = createRoute({
  method: 'delete',
  path: '/system/feeds/{feed}/{group}',
  tags: ['System'],
  description: 'Delete the group data and disable the group itself',
  operationId: 'delete_feed_group',
  request: {
    params: z.object({
      feed: z
        .string()
        .openapi({
          param: { in: 'path', name: 'feed', required: true, schema: { type: 'string' } },
        }),
      group: z
        .string()
        .openapi({
          param: { in: 'path', name: 'group', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Successfully deleted' },
    404: { description: 'Not found' },
    500: { description: 'Internal server error processing the request. Retry expected' },
  },
})

export const getSystemPolicySpecRoute = createRoute({
  method: 'get',
  path: '/system/policy_spec',
  tags: ['System'],
  summary: 'Describe the policy language spec implemented by this service.',
  description: 'Get the policy language spec for this service',
  operationId: 'describe_policy',
  responses: {
    200: {
      description: 'Policy Language Description',
      content: {
        'application/json': {
          schema: z.array(GateSpecSchema).openapi({ description: 'List of Gate specifications' }),
        },
      },
    },
  },
})

export const getSystemServicesRoute = createRoute({
  method: 'get',
  path: '/system/services',
  tags: ['System'],
  summary: 'List system services',
  operationId: 'list_services',
  responses: {
    200: {
      description: 'Service listing',
      content: { 'application/json': { schema: ServiceListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSystemServicesServicenameRoute = createRoute({
  method: 'get',
  path: '/system/services/{servicename}',
  tags: ['System'],
  summary: 'Get a service configuration and state',
  operationId: 'get_services_by_name',
  request: {
    params: z.object({
      servicename: z
        .string()
        .openapi({
          param: { in: 'path', name: 'servicename', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Service Info',
      content: { 'application/json': { schema: ServiceListSchema } },
    },
    500: {
      description: 'Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getSystemServicesServicenameHostidRoute = createRoute({
  method: 'get',
  path: '/system/services/{servicename}/{hostid}',
  tags: ['System'],
  summary: 'Get service config for a specific host',
  operationId: 'get_services_by_name_and_host',
  request: {
    params: z.object({
      servicename: z
        .string()
        .openapi({
          param: { in: 'path', name: 'servicename', required: true, schema: { type: 'string' } },
        }),
      hostid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'hostid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Listing of registered services',
      content: { 'application/json': { schema: ServiceListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const deleteSystemServicesServicenameHostidRoute = createRoute({
  method: 'delete',
  path: '/system/services/{servicename}/{hostid}',
  tags: ['System'],
  summary: 'Delete the service config',
  operationId: 'delete_service',
  request: {
    params: z.object({
      servicename: z
        .string()
        .openapi({
          param: { in: 'path', name: 'servicename', required: true, schema: { type: 'string' } },
        }),
      hostid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'hostid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Delete success' },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postSystemWebhooksWebhookTypeTestRoute = createRoute({
  method: 'post',
  path: '/system/webhooks/{webhook_type}/test',
  tags: ['System'],
  summary: 'Adds the capabilities to test a webhook delivery for the given notification type',
  description:
    'Loads the Webhook configuration for webhook_type, and sends the notification out as a test',
  operationId: 'test_webhook',
  request: {
    params: z.object({
      webhook_type: z
        .string()
        .openapi({
          param: {
            description: 'The Webhook Type that we should test',
            in: 'path',
            name: 'webhook_type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      notification_type: z
        .enum(['tag_update', 'analysis_update', 'vuln_update', 'policy_eval'])
        .default('tag_update')
        .exactOptional()
        .openapi({
          param: {
            description: 'What kind of Notification to send',
            in: 'query',
            name: 'notification_type',
            required: false,
            schema: {
              default: 'tag_update',
              enum: ['tag_update', 'analysis_update', 'vuln_update', 'policy_eval'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The Webhook was sent successfully. Schemas may be found under Models (PolicyEvalNotification, TagUpdateNotification, VulnUpdateNotification, AnalysisUpdateNotification)',
    },
    400: {
      description: 'The Webhook failed to send due to misconfiguration',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
    500: {
      description: 'The Webhook failed to send due to an Internal Error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['Identity'],
  summary: 'List authenticated user info',
  operationId: 'get_user',
  responses: {
    200: {
      description: "User details for caller's user",
      content: { 'application/json': { schema: UserSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getUserCredentialsRoute = createRoute({
  method: 'get',
  path: '/user/credentials',
  tags: ['Identity'],
  summary: 'Get current credential summary',
  operationId: 'get_credentials',
  responses: {
    200: {
      description: 'User credential listing',
      content: { 'application/json': { schema: CredentialListSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const postUserCredentialsRoute = createRoute({
  method: 'post',
  path: '/user/credentials',
  tags: ['Identity'],
  summary: 'add/replace credential',
  operationId: 'add_credential',
  request: { body: AccessCredentialRequestBody },
  responses: {
    200: {
      description: 'Add a credential, overwritting if already exists',
      content: { 'application/json': { schema: UserSchema } },
    },
    500: {
      description: 'Internal error',
      content: { 'application/json': { schema: ApiErrorResponseSchema } },
    },
  },
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  description: 'Returns the version object for the service, including db schema version info',
  operationId: 'version_check',
  responses: {
    200: {
      description: 'Version object describing version state',
      content: { 'application/json': { schema: ServiceVersionSchema } },
    },
  },
})
