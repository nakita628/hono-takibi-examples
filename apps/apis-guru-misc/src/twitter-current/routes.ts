import { createRoute, z } from '@hono/zod-openapi'

const RuleTagSchema = z
  .string()
  .openapi({
    description: 'A tag meant for the labeling of user provided rules.',
    example: 'Non-retweeted coffee Tweets',
  })
  .openapi('RuleTag')

const RuleValueSchema = z
  .string()
  .openapi({ description: 'The filterlang value of the rule.', example: 'coffee -is:retweet' })
  .openapi('RuleValue')

const RuleNoIdSchema = z
  .object({ tag: RuleTagSchema.exactOptional(), value: RuleValueSchema })
  .openapi({ description: 'A user-provided stream filtering rule.', required: ['value'] })
  .openapi('RuleNoId')

const AddRulesRequestSchema = z
  .object({ add: z.array(RuleNoIdSchema) })
  .openapi({
    description: 'A request to add a user-specified stream filtering rule.',
    required: ['add'],
  })
  .openapi('AddRulesRequest')

const RuleIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'Unique identifier of this rule.', example: '120897978112909812' })
  .openapi('RuleId')

const DeleteRulesRequestSchema = z
  .object({
    delete: z
      .object({
        ids: z
          .array(RuleIdSchema)
          .exactOptional()
          .openapi({ description: 'IDs of all deleted user-specified stream filtering rules.' }),
        values: z
          .array(RuleValueSchema)
          .exactOptional()
          .openapi({ description: 'Values of all deleted user-specified stream filtering rules.' }),
      })
      .openapi({
        description: 'IDs and values of all deleted user-specified stream filtering rules.',
        required: [],
      }),
  })
  .openapi({
    description: 'A response from deleting user-specified stream filtering rules.',
    required: ['delete'],
  })
  .openapi('DeleteRulesRequest')

const AddOrDeleteRulesRequestSchema = z
  .xor([AddRulesRequestSchema, DeleteRulesRequestSchema])
  .openapi('AddOrDeleteRulesRequest')

const RuleSchema = z
  .object({
    id: RuleIdSchema.exactOptional(),
    tag: RuleTagSchema.exactOptional(),
    value: RuleValueSchema,
  })
  .openapi({ description: 'A user-provided stream filtering rule.', required: ['value'] })
  .openapi('Rule')

const ProblemSchema = z
  .object({
    detail: z.string().exactOptional(),
    status: z.int().exactOptional(),
    title: z.string(),
    type: z.string(),
  })
  .openapi({
    description:
      'An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).',
    discriminator: {
      mapping: {
        'about:blank': '#/components/schemas/GenericProblem',
        'https://api.twitter.com/2/problems/client-disconnected':
          '#/components/schemas/ClientDisconnectedProblem',
        'https://api.twitter.com/2/problems/client-forbidden':
          '#/components/schemas/ClientForbiddenProblem',
        'https://api.twitter.com/2/problems/conflict': '#/components/schemas/ConflictProblem',
        'https://api.twitter.com/2/problems/disallowed-resource':
          '#/components/schemas/DisallowedResourceProblem',
        'https://api.twitter.com/2/problems/duplicate-rules':
          '#/components/schemas/DuplicateRuleProblem',
        'https://api.twitter.com/2/problems/invalid-request':
          '#/components/schemas/InvalidRequestProblem',
        'https://api.twitter.com/2/problems/invalid-rules':
          '#/components/schemas/InvalidRuleProblem',
        'https://api.twitter.com/2/problems/noncompliant-rules':
          '#/components/schemas/NonCompliantRulesProblem',
        'https://api.twitter.com/2/problems/not-authorized-for-field':
          '#/components/schemas/FieldUnauthorizedProblem',
        'https://api.twitter.com/2/problems/not-authorized-for-resource':
          '#/components/schemas/ResourceUnauthorizedProblem',
        'https://api.twitter.com/2/problems/oauth1-permissions':
          '#/components/schemas/Oauth1PermissionsProblem',
        'https://api.twitter.com/2/problems/operational-disconnect':
          '#/components/schemas/OperationalDisconnectProblem',
        'https://api.twitter.com/2/problems/resource-not-found':
          '#/components/schemas/ResourceNotFoundProblem',
        'https://api.twitter.com/2/problems/resource-unavailable':
          '#/components/schemas/ResourceUnavailableProblem',
        'https://api.twitter.com/2/problems/rule-cap': '#/components/schemas/RulesCapProblem',
        'https://api.twitter.com/2/problems/streaming-connection':
          '#/components/schemas/ConnectionExceptionProblem',
        'https://api.twitter.com/2/problems/unsupported-authentication':
          '#/components/schemas/UnsupportedAuthenticationProblem',
        'https://api.twitter.com/2/problems/usage-capped':
          '#/components/schemas/UsageCapExceededProblem',
      },
      propertyName: 'type',
    },
    required: ['type', 'title'],
  })
  .openapi('Problem')

const NextTokenSchema = z
  .string()
  .min(1)
  .openapi({ description: 'The next token.' })
  .openapi('NextToken')

const RulesRequestSummarySchema = z
  .xor([
    z
      .object({
        created: z
          .int32()
          .openapi({
            description: 'Number of user-specified stream filtering rules that were created.',
            example: 1,
          }),
        invalid: z
          .int32()
          .openapi({
            description: 'Number of invalid user-specified stream filtering rules.',
            example: 1,
          }),
        not_created: z
          .int32()
          .openapi({
            description: 'Number of user-specified stream filtering rules that were not created.',
            example: 1,
          }),
        valid: z
          .int32()
          .openapi({
            description: 'Number of valid user-specified stream filtering rules.',
            example: 1,
          }),
      })
      .openapi({
        description:
          'A summary of the results of the addition of user-specified stream filtering rules.',
        required: ['created', 'not_created', 'valid', 'invalid'],
      }),
    z
      .object({
        deleted: z
          .int32()
          .openapi({
            description: 'Number of user-specified stream filtering rules that were deleted.',
          }),
        not_deleted: z
          .int32()
          .openapi({
            description: 'Number of user-specified stream filtering rules that were not deleted.',
          }),
      })
      .openapi({ required: ['deleted', 'not_deleted'] }),
  ])
  .openapi('RulesRequestSummary')

const RulesResponseMetadataSchema = z
  .object({
    next_token: NextTokenSchema.exactOptional(),
    result_count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of Rules in result set.' }),
    sent: z.string(),
    summary: RulesRequestSummarySchema.exactOptional(),
  })
  .openapi({ required: ['sent'] })
  .openapi('RulesResponseMetadata')

const AddOrDeleteRulesResponseSchema = z
  .object({
    data: z
      .array(RuleSchema)
      .exactOptional()
      .openapi({ description: 'All user-specified stream filtering rules that were created.' }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    meta: RulesResponseMetadataSchema,
  })
  .openapi({
    description: 'A response from modifying user-specified stream filtering rules.',
    required: ['meta'],
  })
  .openapi('AddOrDeleteRulesResponse')

const AggregateSchema = z
  .int32()
  .openapi({ description: 'The sum of results returned in this response.' })
  .openapi('Aggregate')

const MediaHeightSchema = z
  .int()
  .min(0)
  .openapi({ description: 'The height of the media in pixels.' })
  .openapi('MediaHeight')

const MediaKeySchema = z
  .string()
  .regex(/^([0-9]+)_([0-9]+)$/)
  .openapi({ description: 'The Media Key identifier for this attachment.' })
  .openapi('MediaKey')

const MediaWidthSchema = z
  .int()
  .min(0)
  .openapi({ description: 'The width of the media in pixels.' })
  .openapi('MediaWidth')

const MediaSchema = z
  .object({
    height: MediaHeightSchema.exactOptional(),
    media_key: MediaKeySchema.exactOptional(),
    type: z.string(),
    width: MediaWidthSchema.exactOptional(),
  })
  .openapi({
    discriminator: {
      mapping: {
        animated_gif: '#/components/schemas/AnimatedGif',
        photo: '#/components/schemas/Photo',
        video: '#/components/schemas/Video',
      },
      propertyName: 'type',
    },
    required: ['type'],
  })
  .openapi('Media')

const VariantSchema = z
  .object({
    bit_rate: z.int().exactOptional().openapi({ description: 'The bit rate of the media.' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content type of the media.' }),
    url: z.url().exactOptional().openapi({ description: 'The url to the media.' }),
  })
  .openapi({ required: [] })
  .openapi('Variant')

const VariantsSchema = z
  .array(VariantSchema)
  .openapi({ description: 'An array of all available variants of the media.' })
  .openapi('Variants')

const AnimatedGifSchema = MediaSchema.and(
  z
    .object({
      preview_image_url: z.url().exactOptional(),
      variants: VariantsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('AnimatedGif')

const BlockUserMutationResponseSchema = z
  .object({
    data: z
      .object({ blocking: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BlockUserMutationResponse')

const UserIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({
    description:
      'Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.',
    example: '2244994945',
  })
  .openapi('UserId')

const BlockUserRequestSchema = z
  .object({ target_user_id: UserIdSchema })
  .openapi({ required: ['target_user_id'] })
  .openapi('BlockUserRequest')

const TweetIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({
    description:
      'Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.',
    example: '1346889436626259968',
  })
  .openapi('TweetId')

const BookmarkAddRequestSchema = z
  .object({ tweet_id: TweetIdSchema })
  .openapi({ required: ['tweet_id'] })
  .openapi('BookmarkAddRequest')

const BookmarkMutationResponseSchema = z
  .object({
    data: z
      .object({ bookmarked: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BookmarkMutationResponse')

const EntityIndicesInclusiveExclusiveSchema = z
  .object({
    end: z
      .int()
      .min(0)
      .openapi({
        description:
          'Index (zero-based) at which position this entity ends.  The index is exclusive.',
        example: 61,
      }),
    start: z
      .int()
      .min(0)
      .openapi({
        description:
          'Index (zero-based) at which position this entity starts.  The index is inclusive.',
        example: 50,
      }),
  })
  .openapi({
    description:
      'Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.',
    required: ['start', 'end'],
  })
  .openapi('EntityIndicesInclusiveExclusive')

const CashtagFieldsSchema = z
  .object({ tag: z.string().openapi({ example: 'TWTR' }) })
  .openapi({
    description:
      'Represent the portion of text recognized as a Cashtag, and its start and end position within the text.',
    required: ['tag'],
  })
  .openapi('CashtagFields')

const CashtagEntitySchema =
  EntityIndicesInclusiveExclusiveSchema.and(CashtagFieldsSchema).openapi('CashtagEntity')

const ClientDisconnectedProblemSchema = ProblemSchema.openapi({
  description: 'Your client has gone away.',
}).openapi('ClientDisconnectedProblem')

const ClientForbiddenProblemSchema = ProblemSchema.and(
  z
    .object({
      reason: z.enum(['official-client-forbidden', 'client-not-enrolled']).exactOptional(),
      registration_url: z.url().exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description: 'A problem that indicates your client is forbidden from making this request.',
  })
  .openapi('ClientForbiddenProblem')

const CreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Creation time of the compliance job.',
    example: '2021-01-06T18:40:40.000Z',
  })
  .openapi('CreatedAt')

const DownloadExpirationSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Expiration time of the download URL.',
    example: '2021-01-06T18:40:40.000Z',
  })
  .openapi('DownloadExpiration')

const DownloadUrlSchema = z
  .url()
  .openapi({ description: 'URL from which the user will retrieve their compliance results.' })
  .openapi('DownloadUrl')

const JobIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'Compliance Job ID.', example: '1372966999991541762' })
  .openapi('JobId')

const ComplianceJobNameSchema = z
  .string()
  .max(64)
  .openapi({ description: 'User-provided name for a compliance job.', example: 'my-job' })
  .openapi('ComplianceJobName')

const ComplianceJobStatusSchema = z
  .enum(['created', 'in_progress', 'failed', 'complete', 'expired'])
  .openapi({ description: 'Status of a compliance job.' })
  .openapi('ComplianceJobStatus')

const ComplianceJobTypeSchema = z
  .enum(['tweets', 'users'])
  .openapi({ description: 'Type of compliance job to list.' })
  .openapi('ComplianceJobType')

const UploadExpirationSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description: 'Expiration time of the upload URL.',
    example: '2021-01-06T18:40:40.000Z',
  })
  .openapi('UploadExpiration')

const UploadUrlSchema = z
  .url()
  .openapi({ description: 'URL to which the user will upload their Tweet or user IDs.' })
  .openapi('UploadUrl')

const ComplianceJobSchema = z
  .object({
    created_at: CreatedAtSchema,
    download_expires_at: DownloadExpirationSchema,
    download_url: DownloadUrlSchema,
    id: JobIdSchema,
    name: ComplianceJobNameSchema.exactOptional(),
    status: ComplianceJobStatusSchema,
    type: ComplianceJobTypeSchema,
    upload_expires_at: UploadExpirationSchema,
    upload_url: UploadUrlSchema,
  })
  .openapi({
    required: [
      'id',
      'type',
      'created_at',
      'upload_url',
      'download_url',
      'upload_expires_at',
      'download_expires_at',
      'status',
    ],
  })
  .openapi('ComplianceJob')

const ConflictProblemSchema = ProblemSchema.openapi({
  description: 'You cannot create a new job if one is already in progress.',
}).openapi('ConflictProblem')

const ConnectionExceptionProblemSchema = ProblemSchema.and(
  z
    .object({
      connection_issue: z
        .enum([
          'TooManyConnections',
          'ProvisioningSubscription',
          'RuleConfigurationIssue',
          'RulesInvalidIssue',
        ])
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A problem that indicates something is wrong with the connection.' })
  .openapi('ConnectionExceptionProblem')

const ContextAnnotationDomainFieldsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the context annotation domain.' }),
    id: z
      .string()
      .regex(/^[0-9]{1,19}$/)
      .openapi({ description: 'The unique id for a context annotation domain.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the context annotation domain.' }),
  })
  .openapi({
    description: 'Represents the data for the context annotation domain.',
    required: ['id'],
  })
  .openapi('ContextAnnotationDomainFields')

const ContextAnnotationEntityFieldsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the context annotation entity.' }),
    id: z
      .string()
      .regex(/^[0-9]{1,19}$/)
      .openapi({ description: 'The unique id for a context annotation entity.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the context annotation entity.' }),
  })
  .openapi({
    description: 'Represents the data for the context annotation entity.',
    required: ['id'],
  })
  .openapi('ContextAnnotationEntityFields')

const ContextAnnotationSchema = z
  .object({
    domain: ContextAnnotationDomainFieldsSchema,
    entity: ContextAnnotationEntityFieldsSchema,
  })
  .openapi({
    description: 'Annotation inferred from the Tweet text.',
    required: ['domain', 'entity'],
  })
  .openapi('ContextAnnotation')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .openapi({ description: 'A two-letter ISO 3166-1 alpha-2 country code.', example: 'US' })
  .openapi('CountryCode')

const MediaIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'The unique identifier of this Media.', example: '1146654567674912769' })
  .openapi('MediaId')

const DmMediaAttachmentSchema = z
  .object({ media_id: MediaIdSchema })
  .openapi({ required: ['media_id'] })
  .openapi('DmMediaAttachment')

const DmAttachmentsSchema = z
  .array(DmMediaAttachmentSchema)
  .openapi({ description: 'Attachments to a DM Event.' })
  .openapi('DmAttachments')

const CreateAttachmentsMessageRequestSchema = z
  .object({
    attachments: DmAttachmentsSchema,
    text: z.string().min(1).exactOptional().openapi({ description: 'Text of the message.' }),
  })
  .openapi({ required: ['attachments'] })
  .openapi('CreateAttachmentsMessageRequest')

const CreateComplianceJobRequestSchema = z
  .object({
    name: ComplianceJobNameSchema.exactOptional(),
    resumable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, this endpoint will return a pre-signed URL with resumable uploads enabled.',
      }),
    type: z.enum(['tweets', 'users']).openapi({ description: 'Type of compliance job to list.' }),
  })
  .openapi({ description: 'A request to create a new batch compliance job.', required: ['type'] })
  .openapi('CreateComplianceJobRequest')

const CreateComplianceJobResponseSchema = z
  .object({
    data: ComplianceJobSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateComplianceJobResponse')

const CreateTextMessageRequestSchema = z
  .object({
    attachments: DmAttachmentsSchema.exactOptional(),
    text: z.string().min(1).openapi({ description: 'Text of the message.' }),
  })
  .openapi({ required: ['text'] })
  .openapi('CreateTextMessageRequest')

const CreateMessageRequestSchema = z
  .union([CreateTextMessageRequestSchema, CreateAttachmentsMessageRequestSchema])
  .openapi('CreateMessageRequest')

const DmParticipantsSchema = z
  .array(UserIdSchema)
  .min(2)
  .max(49)
  .openapi({ description: 'Participants for the DM Conversation.' })
  .openapi('DmParticipants')

const CreateDmConversationRequestSchema = z
  .strictObject({
    conversation_type: z
      .literal('Group')
      .openapi({ description: 'The conversation type that is being created.' }),
    message: CreateMessageRequestSchema,
    participant_ids: DmParticipantsSchema,
  })
  .openapi({ required: ['conversation_type', 'participant_ids', 'message'] })
  .openapi('CreateDmConversationRequest')

const DmConversationIdSchema = z
  .string()
  .regex(/^([0-9]{1,19}-[0-9]{1,19}|[0-9]{15,19})$/)
  .openapi({
    description:
      "Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.",
    example: '123123123-456456456',
  })
  .openapi('DmConversationId')

const DmEventIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'Unique identifier of a DM Event.', example: '1146654567674912769' })
  .openapi('DmEventId')

const CreateDmEventResponseSchema = z
  .object({
    data: z
      .object({ dm_conversation_id: DmConversationIdSchema, dm_event_id: DmEventIdSchema })
      .exactOptional()
      .openapi({ required: ['dm_conversation_id', 'dm_event_id'] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDmEventResponse')

const DisallowedResourceProblemSchema = ProblemSchema.and(
  z
    .object({
      resource_id: z.string(),
      resource_type: z.enum(['user', 'tweet', 'media', 'list', 'space']),
      section: z.enum(['data', 'includes']),
    })
    .openapi({ required: ['resource_id', 'resource_type', 'section'] }),
)
  .openapi({
    description:
      'A problem that indicates that the resource requested violates the precepts of this API.',
  })
  .openapi('DisallowedResourceProblem')

const DmEventSchema = z
  .object({
    attachments: z
      .object({
        card_ids: z
          .array(z.string())
          .min(1)
          .exactOptional()
          .openapi({ description: 'A list of card IDs (if cards are attached).' }),
        media_keys: z
          .array(MediaKeySchema)
          .min(1)
          .exactOptional()
          .openapi({
            description:
              'A list of Media Keys for each one of the media attachments (if media are attached).',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Specifies the type of attachments (if any) present in this DM.',
        required: [],
      }),
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    dm_conversation_id: DmConversationIdSchema.exactOptional(),
    event_type: z.string().openapi({ example: 'MessageCreate' }),
    id: DmEventIdSchema,
    participant_ids: z
      .array(UserIdSchema)
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'A list of participants for a ParticipantsJoin or ParticipantsLeave event_type.',
      }),
    referenced_tweets: z
      .array(z.object({ id: TweetIdSchema }).openapi({ required: ['id'] }))
      .min(1)
      .exactOptional()
      .openapi({ description: 'A list of Tweets this DM refers to.' }),
    sender_id: UserIdSchema.exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'event_type'] })
  .openapi('DmEvent')

const DuplicateRuleProblemSchema = ProblemSchema.and(
  z
    .object({ id: z.string().exactOptional(), value: z.string().exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: 'The rule you have submitted is a duplicate.' })
  .openapi('DuplicateRuleProblem')

const EndSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'The end time of the bucket.' })
  .openapi('End')

const EntityIndicesInclusiveInclusiveSchema = z
  .object({
    end: z
      .int()
      .min(0)
      .openapi({
        description:
          'Index (zero-based) at which position this entity ends.  The index is inclusive.',
        example: 61,
      }),
    start: z
      .int()
      .min(0)
      .openapi({
        description:
          'Index (zero-based) at which position this entity starts.  The index is inclusive.',
        example: 50,
      }),
  })
  .openapi({
    description:
      'Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.',
    required: ['start', 'end'],
  })
  .openapi('EntityIndicesInclusiveInclusive')

const ErrorSchema = z
  .object({ code: z.int32(), message: z.string() })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const PlaceIdSchema = z
  .string()
  .openapi({ description: 'The identifier for this place.', example: 'f7eb2fa2fea288b1' })
  .openapi('PlaceId')

const PositionSchema = z
  .array(z.number())
  .length(2)
  .openapi({
    description:
      'A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.',
    example: [-105.18816086351444, 40.247749999999996],
  })
  .openapi('Position')

const PointSchema = z
  .object({ coordinates: PositionSchema, type: z.literal('Point').openapi({ example: 'Point' }) })
  .openapi({
    description:
      'A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.',
    required: ['type', 'coordinates'],
  })
  .openapi('Point')

const GeoSchema = z
  .object({
    bbox: z
      .array(z.float64().min(-180).max(180))
      .length(4)
      .openapi({ example: [-105.193475, 39.60973, -105.053164, 39.761974] }),
    geometry: PointSchema.exactOptional(),
    properties: z.object({}),
    type: z.literal('Feature'),
  })
  .openapi({ required: ['type', 'bbox', 'properties'] })
  .openapi('Geo')

const PlaceTypeSchema = z
  .enum(['poi', 'neighborhood', 'city', 'admin', 'country', 'unknown'])
  .openapi({ example: 'city' })
  .openapi('PlaceType')

const PlaceSchema = z
  .object({
    contained_within: z.array(PlaceIdSchema).min(1).exactOptional(),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full name of the county in which this place exists.',
        example: 'United States',
      }),
    country_code: CountryCodeSchema.exactOptional(),
    full_name: z
      .string()
      .openapi({ description: 'The full name of this place.', example: 'Lakewood, CO' }),
    geo: GeoSchema.exactOptional(),
    id: PlaceIdSchema,
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name of this place.', example: 'Lakewood' }),
    place_type: PlaceTypeSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'full_name'] })
  .openapi('Place')

const PollIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'Unique identifier of this poll.', example: '1365059861688410112' })
  .openapi('PollId')

const PollOptionLabelSchema = z
  .string()
  .min(1)
  .max(25)
  .openapi({ description: 'The text of a poll choice.' })
  .openapi('PollOptionLabel')

const PollOptionSchema = z
  .object({
    label: PollOptionLabelSchema,
    position: z.int().openapi({ description: 'Position of this choice in the poll.' }),
    votes: z.int().openapi({ description: 'Number of users who voted for this choice.' }),
  })
  .openapi({
    description: 'Describes a choice in a Poll object.',
    required: ['position', 'label', 'votes'],
  })
  .openapi('PollOption')

const PollSchema = z
  .object({
    duration_minutes: z.int32().min(5).max(10080).exactOptional(),
    end_datetime: z.iso.datetime({ offset: true }).exactOptional(),
    id: PollIdSchema,
    options: z.array(PollOptionSchema).min(2).max(4),
    voting_status: z.enum(['open', 'closed']).exactOptional(),
  })
  .openapi({ description: 'Represent a Poll attached to a Tweet.', required: ['id', 'options'] })
  .openapi('Poll')

const TopicIdSchema = z
  .string()
  .openapi({ description: 'Unique identifier of this Topic.' })
  .openapi('TopicId')

const TopicSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the given topic.',
        example: 'All about technology',
      }),
    id: TopicIdSchema,
    name: z
      .string()
      .openapi({ description: 'The name of the given topic.', example: 'Technology' }),
  })
  .openapi({
    description: 'The topic of a Space, as selected by its creator.',
    required: ['id', 'name'],
  })
  .openapi('Topic')

const HashtagFieldsSchema = z
  .object({
    tag: z
      .string()
      .openapi({ description: 'The text of the Hashtag.', example: 'MondayMotivation' }),
  })
  .openapi({
    description:
      'Represent the portion of text recognized as a Hashtag, and its start and end position within the text.',
    required: ['tag'],
  })
  .openapi('HashtagFields')

const HashtagEntitySchema =
  EntityIndicesInclusiveExclusiveSchema.and(HashtagFieldsSchema).openapi('HashtagEntity')

const UserNameSchema = z
  .string()
  .regex(/^[A-Za-z0-9_]{1,15}$/)
  .openapi({ description: 'The Twitter handle (screen name) of this user.' })
  .openapi('UserName')

const MentionFieldsSchema = z
  .object({ id: UserIdSchema.exactOptional(), username: UserNameSchema })
  .openapi({
    description:
      'Represent the portion of text recognized as a User mention, and its start and end position within the text.',
    required: ['username'],
  })
  .openapi('MentionFields')

const MentionEntitySchema =
  EntityIndicesInclusiveExclusiveSchema.and(MentionFieldsSchema).openapi('MentionEntity')

const UrlSchema = z
  .url()
  .openapi({
    description: 'A validly formatted URL.',
    example: 'https://developer.twitter.com/en/docs/twitter-api',
  })
  .openapi('Url')

const UrlImageSchema = z
  .object({
    height: MediaHeightSchema.exactOptional(),
    url: UrlSchema.exactOptional(),
    width: MediaWidthSchema.exactOptional(),
  })
  .openapi({ description: 'Represent the information for the URL image.', required: [] })
  .openapi('UrlImage')

const HttpStatusCodeSchema = z
  .int()
  .min(100)
  .max(599)
  .openapi({ description: 'HTTP Status Code.' })
  .openapi('HttpStatusCode')

const UrlFieldsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the URL landing page.',
        example: 'This is a description of the website.',
      }),
    display_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL as displayed in the Twitter client.',
        example: 'twittercommunity.com/t/introducing-…',
      }),
    expanded_url: UrlSchema.exactOptional(),
    images: z.array(UrlImageSchema).min(1).exactOptional(),
    media_key: MediaKeySchema.exactOptional(),
    status: HttpStatusCodeSchema.exactOptional(),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Title of the page the URL points to.',
        example: 'Introducing the v2 follow lookup endpoints',
      }),
    unwound_url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'Fully resolved url.',
        example: 'https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118',
      }),
    url: UrlSchema,
  })
  .openapi({ description: 'Represent the portion of text recognized as a URL.', required: ['url'] })
  .openapi('UrlFields')

const UrlEntitySchema = EntityIndicesInclusiveExclusiveSchema.and(UrlFieldsSchema)
  .openapi({
    description:
      'Represent the portion of text recognized as a URL, and its start and end position within the text.',
  })
  .openapi('UrlEntity')

const FullTextEntitiesSchema = z
  .object({
    annotations: z
      .array(
        EntityIndicesInclusiveInclusiveSchema.and(
          z
            .object({
              normalized_text: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Text used to determine annotation.',
                  example: 'Barack Obama',
                }),
              probability: z
                .float64()
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({ description: 'Confidence factor for annotation type.' }),
              type: z
                .string()
                .exactOptional()
                .openapi({ description: 'Annotation type.', example: 'Person' }),
            })
            .openapi({ description: 'Represents the data for the annotation.', required: [] }),
        ).openapi({ description: 'Annotation for entities based on the Tweet text.' }),
      )
      .min(1)
      .exactOptional(),
    cashtags: z.array(CashtagEntitySchema).min(1).exactOptional(),
    hashtags: z.array(HashtagEntitySchema).min(1).exactOptional(),
    mentions: z.array(MentionEntitySchema).min(1).exactOptional(),
    urls: z.array(UrlEntitySchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FullTextEntities')

const ReplySettingsSchema = z
  .enum(['everyone', 'mentionedUsers', 'following', 'other'])
  .openapi({
    description:
      'Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.',
  })
  .openapi('ReplySettings')

const TweetTextSchema = z
  .string()
  .openapi({
    description: 'The content of the Tweet.',
    example:
      'Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i',
  })
  .openapi('TweetText')

const TweetWithheldSchema = z
  .object({
    copyright: z
      .boolean()
      .openapi({
        description:
          'Indicates if the content is being withheld for on the basis of copyright infringement.',
      }),
    country_codes: z
      .array(CountryCodeSchema)
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'Provides a list of countries where this content is not available.',
      }),
    scope: z
      .enum(['tweet', 'user'])
      .exactOptional()
      .openapi({
        description: 'Indicates whether the content being withheld is the `tweet` or a `user`.',
      }),
  })
  .openapi({
    description:
      'Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).',
    required: ['copyright', 'country_codes'],
  })
  .openapi('TweetWithheld')

const TweetSchema = z
  .object({
    attachments: z
      .object({
        media_keys: z
          .array(MediaKeySchema)
          .min(1)
          .exactOptional()
          .openapi({
            description:
              'A list of Media Keys for each one of the media attachments (if media are attached).',
          }),
        poll_ids: z
          .array(PollIdSchema)
          .min(1)
          .exactOptional()
          .openapi({ description: 'A list of poll IDs (if polls are attached).' }),
      })
      .exactOptional()
      .openapi({
        description: 'Specifies the type of attachments (if any) present in this Tweet.',
        required: [],
      }),
    author_id: UserIdSchema.exactOptional(),
    context_annotations: z.array(ContextAnnotationSchema).min(1).exactOptional(),
    conversation_id: TweetIdSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation time of the Tweet.', example: '2021-01-06T18:40:40.000Z' }),
    edit_controls: z
      .object({
        editable_until: z.iso
          .datetime({ offset: true })
          .openapi({
            description: 'Time when Tweet is no longer editable.',
            example: '2021-01-06T18:40:40.000Z',
          }),
        edits_remaining: z
          .int()
          .openapi({ description: 'Number of times this Tweet can be edited.' }),
        is_edit_eligible: z
          .boolean()
          .openapi({
            description: 'Indicates if this Tweet is eligible to be edited.',
            example: false,
          }),
      })
      .exactOptional()
      .openapi({ required: ['is_edit_eligible', 'editable_until', 'edits_remaining'] }),
    edit_history_tweet_ids: z
      .array(TweetIdSchema)
      .min(1)
      .openapi({ description: 'A list of Tweet Ids in this Tweet chain.' }),
    entities: FullTextEntitiesSchema.exactOptional(),
    geo: z
      .object({ coordinates: PointSchema.exactOptional(), place_id: PlaceIdSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The location tagged on the Tweet, if the user provided one.',
        required: [],
      }),
    id: TweetIdSchema,
    in_reply_to_user_id: UserIdSchema.exactOptional(),
    lang: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.',
        example: 'en',
      }),
    non_public_metrics: z
      .object({
        impression_count: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been viewed.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Nonpublic engagement metrics for the Tweet at the time of the request.',
        required: [],
      }),
    organic_metrics: z
      .object({
        impression_count: z
          .int()
          .openapi({ description: 'Number of times this Tweet has been viewed.' }),
        like_count: z.int().openapi({ description: 'Number of times this Tweet has been liked.' }),
        reply_count: z
          .int()
          .openapi({ description: 'Number of times this Tweet has been replied to.' }),
        retweet_count: z
          .int()
          .openapi({ description: 'Number of times this Tweet has been Retweeted.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Organic nonpublic engagement metrics for the Tweet at the time of the request.',
        required: ['impression_count', 'retweet_count', 'reply_count', 'like_count'],
      }),
    possibly_sensitive: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.',
        example: false,
      }),
    promoted_metrics: z
      .object({
        impression_count: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been viewed.' }),
        like_count: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been liked.' }),
        reply_count: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been replied to.' }),
        retweet_count: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been Retweeted.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Promoted nonpublic engagement metrics for the Tweet at the time of the request.',
        required: [],
      }),
    public_metrics: z
      .object({
        impression_count: z
          .int32()
          .openapi({ description: 'Number of times this Tweet has been viewed.' }),
        like_count: z.int().openapi({ description: 'Number of times this Tweet has been liked.' }),
        quote_count: z
          .int()
          .exactOptional()
          .openapi({ description: 'Number of times this Tweet has been quoted.' }),
        reply_count: z
          .int()
          .openapi({ description: 'Number of times this Tweet has been replied to.' }),
        retweet_count: z
          .int()
          .openapi({ description: 'Number of times this Tweet has been Retweeted.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Engagement metrics for the Tweet at the time of the request.',
        required: ['retweet_count', 'reply_count', 'like_count', 'impression_count'],
      }),
    referenced_tweets: z
      .array(
        z
          .object({ id: TweetIdSchema, type: z.enum(['retweeted', 'quoted', 'replied_to']) })
          .openapi({ required: ['type', 'id'] }),
      )
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.',
      }),
    reply_settings: ReplySettingsSchema.exactOptional(),
    source: z.string().exactOptional().openapi({ description: 'This is deprecated.' }),
    text: TweetTextSchema,
    withheld: TweetWithheldSchema.exactOptional(),
  })
  .openapi({
    example: {
      author_id: '2244994945',
      created_at: 'Wed Jan 06 18:40:40 +0000 2021',
      id: '1346889436626259968',
      text: 'Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i',
    },
    required: ['id', 'text', 'edit_history_tweet_ids'],
  })
  .openapi('Tweet')

const UserWithheldSchema = z
  .object({
    country_codes: z
      .array(CountryCodeSchema)
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description: 'Provides a list of countries where this content is not available.',
      }),
    scope: z
      .literal('user')
      .exactOptional()
      .openapi({ description: 'Indicates that the content being withheld is a `user`.' }),
  })
  .openapi({
    description:
      'Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).',
    required: ['country_codes'],
  })
  .openapi('UserWithheld')

const UserSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation time of this User.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The text of this User's profile description (also known as bio), if the User provided one.",
      }),
    entities: z
      .object({
        description: FullTextEntitiesSchema.exactOptional(),
        url: z
          .object({ urls: z.array(UrlEntitySchema).min(1).exactOptional() })
          .exactOptional()
          .openapi({
            description:
              "Expanded details for the URL specified in the User's profile, with start and end indices.",
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: "A list of metadata found in the User's profile description.",
        required: [],
      }),
    id: UserIdSchema,
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.",
      }),
    name: z
      .string()
      .openapi({ description: 'The friendly name of this User, as shown on their profile.' }),
    pinned_tweet_id: TweetIdSchema.exactOptional(),
    profile_image_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL to the profile image for this User.' }),
    protected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private).",
      }),
    public_metrics: z
      .object({
        followers_count: z
          .int()
          .openapi({ description: 'Number of Users who are following this User.' }),
        following_count: z
          .int()
          .openapi({ description: 'Number of Users this User is following.' }),
        listed_count: z
          .int()
          .openapi({ description: 'The number of lists that include this User.' }),
        tweet_count: z
          .int()
          .openapi({
            description: 'The number of Tweets (including Retweets) posted by this User.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'A list of metrics for this User.',
        required: ['followers_count', 'following_count', 'tweet_count', 'listed_count'],
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL specified in the User's profile." }),
    username: UserNameSchema,
    verified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicate if this User is a verified Twitter User.' }),
    verified_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Twitter Blue verified type of the user, eg: blue, government, business or none.',
      }),
    withheld: UserWithheldSchema.exactOptional(),
  })
  .openapi({
    description: 'The Twitter User object.',
    example: {
      created_at: '2013-12-14T04:35:55Z',
      id: '2244994945',
      name: 'Twitter Dev',
      protected: false,
      username: 'TwitterDev',
    },
    required: ['id', 'name', 'username'],
  })
  .openapi('User')

const ExpansionsSchema = z
  .object({
    media: z.array(MediaSchema).min(1).exactOptional(),
    places: z.array(PlaceSchema).min(1).exactOptional(),
    polls: z.array(PollSchema).min(1).exactOptional(),
    topics: z.array(TopicSchema).min(1).exactOptional(),
    tweets: z.array(TweetSchema).min(1).exactOptional(),
    users: z.array(UserSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Expansions')

const FieldUnauthorizedProblemSchema = ProblemSchema.and(
  z
    .object({
      field: z.string(),
      resource_type: z.enum(['user', 'tweet', 'media', 'list', 'space']),
      section: z.enum(['data', 'includes']),
    })
    .openapi({ required: ['resource_type', 'field', 'section'] }),
)
  .openapi({
    description:
      'A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.',
  })
  .openapi('FieldUnauthorizedProblem')

const FilteredStreamingTweetResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    matching_rules: z
      .array(
        z
          .object({ id: RuleIdSchema, tag: RuleTagSchema.exactOptional() })
          .openapi({ required: ['id'] }),
      )
      .exactOptional()
      .openapi({ description: 'The list of rules which matched the Tweet' }),
  })
  .openapi({
    description:
      'A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.',
    required: [],
  })
  .openapi('FilteredStreamingTweetResponse')

const GenericProblemSchema = ProblemSchema.openapi({
  description:
    'A generic problem with no additional information beyond that provided by the HTTP status code.',
}).openapi('GenericProblem')

const Get2ComplianceJobsIdResponseSchema = z
  .object({
    data: ComplianceJobSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2ComplianceJobsIdResponse')

const ResultCountSchema = z
  .int32()
  .openapi({ description: 'The number of results returned in this response.' })
  .openapi('ResultCount')

const Get2ComplianceJobsResponseSchema = z
  .object({
    data: z.array(ComplianceJobSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    meta: z
      .object({ result_count: ResultCountSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2ComplianceJobsResponse')

const PreviousTokenSchema = z
  .string()
  .min(1)
  .openapi({ description: 'The previous token.' })
  .openapi('PreviousToken')

const Get2DmConversationsIdDmEventsResponseSchema = z
  .object({
    data: z.array(DmEventSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2DmConversationsIdDmEventsResponse')

const Get2DmConversationsWithParticipantIdDmEventsResponseSchema = z
  .object({
    data: z.array(DmEventSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2DmConversationsWithParticipantIdDmEventsResponse')

const Get2DmEventsResponseSchema = z
  .object({
    data: z.array(DmEventSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2DmEventsResponse')

const Get2ListsIdFollowersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2ListsIdFollowersResponse')

const Get2ListsIdMembersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2ListsIdMembersResponse')

const ListIdSchema = z
  .string()
  .regex(/^[0-9]{1,19}$/)
  .openapi({ description: 'The unique identifier of this List.', example: '1146654567674912769' })
  .openapi('ListId')

const ListSchema = z
  .object({
    created_at: z.iso.datetime({ offset: true }).exactOptional(),
    description: z.string().exactOptional(),
    follower_count: z.int().exactOptional(),
    id: ListIdSchema,
    member_count: z.int().exactOptional(),
    name: z.string().openapi({ description: 'The name of this List.' }),
    owner_id: UserIdSchema.exactOptional(),
    private: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'A Twitter List is a curated group of accounts.',
    required: ['id', 'name'],
  })
  .openapi('List')

const Get2ListsIdResponseSchema = z
  .object({
    data: ListSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2ListsIdResponse')

const Get2ListsIdTweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2ListsIdTweetsResponse')

const SpaceIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{1,13}$/)
  .openapi({ description: 'The unique identifier of this Space.', example: '1SLjjRYNejbKM' })
  .openapi('SpaceId')

const SpaceSchema = z
  .object({
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Creation time of the Space.', example: '2021-07-06T18:40:40.000Z' }),
    creator_id: UserIdSchema.exactOptional(),
    ended_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'End time of the Space.', example: '2021-07-06T18:40:40.000Z' }),
    host_ids: z
      .array(UserIdSchema)
      .exactOptional()
      .openapi({ description: 'The user ids for the hosts of the Space.' }),
    id: SpaceIdSchema,
    invited_user_ids: z
      .array(UserIdSchema)
      .exactOptional()
      .openapi({ description: 'An array of user ids for people who were invited to a Space.' }),
    is_ticketed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Denotes if the Space is a ticketed Space.', example: 'false' }),
    lang: z
      .string()
      .exactOptional()
      .openapi({ description: 'The language of the Space.', example: 'en' }),
    participant_count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of participants in a Space.', example: 10 }),
    scheduled_start: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'A date time stamp for when a Space is scheduled to begin.',
        example: '2021-07-06T18:40:40.000Z',
      }),
    speaker_ids: z
      .array(UserIdSchema)
      .exactOptional()
      .openapi({ description: 'An array of user ids for people who were speakers in a Space.' }),
    started_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the Space was started as a date string.',
        example: '2021-7-14T04:35:55Z',
      }),
    state: z
      .enum(['live', 'scheduled', 'ended'])
      .openapi({ description: 'The current state of the Space.', example: 'live' }),
    subscriber_count: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of people who have either purchased a ticket or set a reminder for this Space.',
        example: 10,
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the Space.', example: 'Spaces are Awesome' }),
    topics: z
      .array(
        z
          .object({
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The description of the given topic.' }),
            id: z.string().openapi({ description: 'An ID suitable for use in the REST API.' }),
            name: z.string().openapi({ description: 'The name of the given topic.' }),
          })
          .openapi({
            description: 'The Twitter Topic object.',
            example: {
              description: 'All about technology',
              id: '848920371311001600',
              name: 'Technology',
            },
            required: ['id', 'name'],
          }),
      )
      .exactOptional()
      .openapi({ description: 'The topics of a Space, as selected by its creator.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the Space was last updated.', example: '2021-7-14T04:35:55Z' }),
  })
  .openapi({ description: '', required: ['id', 'state'] })
  .openapi('Space')

const Get2SpacesByCreatorIdsResponseSchema = z
  .object({
    data: z.array(SpaceSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({ result_count: ResultCountSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesByCreatorIdsResponse')

const Get2SpacesIdBuyersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesIdBuyersResponse')

const Get2SpacesIdResponseSchema = z
  .object({
    data: SpaceSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesIdResponse')

const Get2SpacesIdTweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesIdTweetsResponse')

const Get2SpacesResponseSchema = z
  .object({
    data: z.array(SpaceSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesResponse')

const Get2SpacesSearchResponseSchema = z
  .object({
    data: z.array(SpaceSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({ result_count: ResultCountSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2SpacesSearchResponse')

const StartSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'The start time of the bucket.' })
  .openapi('Start')

const TweetCountSchema = z
  .int()
  .openapi({ description: 'The count for the bucket.' })
  .openapi('TweetCount')

const SearchCountSchema = z
  .object({ end: EndSchema, start: StartSchema, tweet_count: TweetCountSchema })
  .openapi({
    description: 'Represent a Search Count Result.',
    required: ['end', 'start', 'tweet_count'],
  })
  .openapi('SearchCount')

const NewestIdSchema = z
  .string()
  .openapi({ description: 'The newest id in this response.' })
  .openapi('NewestId')

const OldestIdSchema = z
  .string()
  .openapi({ description: 'The oldest id in this response.' })
  .openapi('OldestId')

const Get2TweetsCountsAllResponseSchema = z
  .object({
    data: z.array(SearchCountSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        total_tweet_count: AggregateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsCountsAllResponse')

const Get2TweetsCountsRecentResponseSchema = z
  .object({
    data: z.array(SearchCountSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        total_tweet_count: AggregateSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsCountsRecentResponse')

const Get2TweetsFirehoseStreamResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsFirehoseStreamResponse')

const Get2TweetsIdLikingUsersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsIdLikingUsersResponse')

const Get2TweetsIdQuoteTweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsIdQuoteTweetsResponse')

const Get2TweetsIdResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsIdResponse')

const Get2TweetsIdRetweetedByResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsIdRetweetedByResponse')

const Get2TweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsResponse')

const Get2TweetsSample10StreamResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsSample10StreamResponse')

const Get2TweetsSampleStreamResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsSampleStreamResponse')

const Get2TweetsSearchAllResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsSearchAllResponse')

const Get2TweetsSearchRecentResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsSearchRecentResponse')

const Get2TweetsSearchStreamResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2TweetsSearchStreamResponse')

const Get2UsersByResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersByResponse')

const Get2UsersByUsernameUsernameResponseSchema = z
  .object({
    data: UserSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersByUsernameUsernameResponse')

const Get2UsersIdBlockingResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdBlockingResponse')

const Get2UsersIdBookmarksResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdBookmarksResponse')

const Get2UsersIdFollowedListsResponseSchema = z
  .object({
    data: z.array(ListSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdFollowedListsResponse')

const Get2UsersIdFollowersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdFollowersResponse')

const Get2UsersIdFollowingResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdFollowingResponse')

const Get2UsersIdLikedTweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdLikedTweetsResponse')

const Get2UsersIdListMembershipsResponseSchema = z
  .object({
    data: z.array(ListSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdListMembershipsResponse')

const Get2UsersIdMentionsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdMentionsResponse')

const Get2UsersIdMutingResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdMutingResponse')

const Get2UsersIdOwnedListsResponseSchema = z
  .object({
    data: z.array(ListSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        next_token: NextTokenSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdOwnedListsResponse')

const Get2UsersIdPinnedListsResponseSchema = z
  .object({
    data: z.array(ListSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({ result_count: ResultCountSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdPinnedListsResponse')

const Get2UsersIdResponseSchema = z
  .object({
    data: UserSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdResponse')

const Get2UsersIdTimelinesReverseChronologicalResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdTimelinesReverseChronologicalResponse')

const Get2UsersIdTweetsResponseSchema = z
  .object({
    data: z.array(TweetSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
    meta: z
      .object({
        newest_id: NewestIdSchema.exactOptional(),
        next_token: NextTokenSchema.exactOptional(),
        oldest_id: OldestIdSchema.exactOptional(),
        previous_token: PreviousTokenSchema.exactOptional(),
        result_count: ResultCountSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersIdTweetsResponse')

const Get2UsersMeResponseSchema = z
  .object({
    data: UserSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersMeResponse')

const Get2UsersResponseSchema = z
  .object({
    data: z.array(UserSchema).min(1).exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Get2UsersResponse')

const InvalidRequestProblemSchema = ProblemSchema.and(
  z
    .object({
      errors: z
        .array(
          z
            .object({
              message: z.string().exactOptional(),
              parameters: z.record(z.string(), z.array(z.string())).exactOptional(),
            })
            .openapi({ required: [] }),
        )
        .min(1)
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A problem that indicates this request is invalid.' })
  .openapi('InvalidRequestProblem')

const InvalidRuleProblemSchema = ProblemSchema.openapi({
  description: 'The rule you have submitted is invalid.',
}).openapi('InvalidRuleProblem')

const ListAddUserRequestSchema = z
  .object({ user_id: UserIdSchema })
  .openapi({ required: ['user_id'] })
  .openapi('ListAddUserRequest')

const ListCreateRequestSchema = z
  .object({
    description: z.string().min(0).max(100).exactOptional(),
    name: z.string().min(1).max(25),
    private: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['name'] })
  .openapi('ListCreateRequest')

const ListCreateResponseSchema = z
  .object({
    data: z
      .object({
        id: ListIdSchema,
        name: z.string().openapi({ description: 'The name of this List.' }),
      })
      .exactOptional()
      .openapi({
        description: 'A Twitter List is a curated group of accounts.',
        required: ['id', 'name'],
      }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCreateResponse')

const ListDeleteResponseSchema = z
  .object({
    data: z
      .object({ deleted: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDeleteResponse')

const ListFollowedRequestSchema = z
  .object({ list_id: ListIdSchema })
  .openapi({ required: ['list_id'] })
  .openapi('ListFollowedRequest')

const ListFollowedResponseSchema = z
  .object({
    data: z
      .object({ following: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFollowedResponse')

const ListMutateResponseSchema = z
  .object({
    data: z
      .object({ is_member: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMutateResponse')

const ListPinnedRequestSchema = z
  .object({ list_id: ListIdSchema })
  .openapi({ required: ['list_id'] })
  .openapi('ListPinnedRequest')

const ListPinnedResponseSchema = z
  .object({
    data: z
      .object({ pinned: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPinnedResponse')

const ListUnpinResponseSchema = z
  .object({
    data: z
      .object({ pinned: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUnpinResponse')

const ListUpdateRequestSchema = z
  .object({
    description: z.string().min(0).max(100).exactOptional(),
    name: z.string().min(1).max(25).exactOptional(),
    private: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUpdateRequest')

const ListUpdateResponseSchema = z
  .object({
    data: z
      .object({ updated: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListUpdateResponse')

const MuteUserMutationResponseSchema = z
  .object({
    data: z
      .object({ muting: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MuteUserMutationResponse')

const MuteUserRequestSchema = z
  .object({ target_user_id: UserIdSchema })
  .openapi({ required: ['target_user_id'] })
  .openapi('MuteUserRequest')

const NonCompliantRulesProblemSchema = ProblemSchema.openapi({
  description: "A problem that indicates the user's rule set is not compliant.",
}).openapi('NonCompliantRulesProblem')

const Oauth1PermissionsProblemSchema = ProblemSchema.openapi({
  description:
    'A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint.',
}).openapi('Oauth1PermissionsProblem')

const OperationalDisconnectProblemSchema = ProblemSchema.and(
  z
    .object({
      disconnect_type: z
        .enum([
          'OperationalDisconnect',
          'UpstreamOperationalDisconnect',
          'ForceDisconnect',
          'UpstreamUncleanDisconnect',
          'SlowReader',
          'InternalError',
          'ClientApplicationStateDegraded',
          'InvalidRules',
        ])
        .exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'You have been disconnected for operational reasons.' })
  .openapi('OperationalDisconnectProblem')

const PaginationToken32Schema = z
  .string()
  .min(16)
  .openapi({ description: 'A base32 pagination token.' })
  .openapi('PaginationToken32')

const PaginationToken36Schema = z
  .string()
  .min(1)
  .openapi({ description: 'A base36 pagination token.' })
  .openapi('PaginationToken36')

const PaginationTokenLongSchema = z
  .string()
  .min(1)
  .max(19)
  .openapi({ description: "A 'long' pagination token." })
  .openapi('PaginationTokenLong')

const PhotoSchema = MediaSchema.and(
  z
    .object({ alt_text: z.string().exactOptional(), url: z.url().exactOptional() })
    .openapi({ required: [] }),
).openapi('Photo')

const ResourceNotFoundProblemSchema = ProblemSchema.and(
  z
    .object({
      parameter: z.string().min(1),
      resource_id: z.string(),
      resource_type: z.enum(['user', 'tweet', 'media', 'list', 'space']),
      value: z.string().openapi({ description: 'Value will match the schema of the field.' }),
    })
    .openapi({ required: ['parameter', 'value', 'resource_id', 'resource_type'] }),
)
  .openapi({
    description: 'A problem that indicates that a given Tweet, User, etc. does not exist.',
  })
  .openapi('ResourceNotFoundProblem')

const ResourceUnauthorizedProblemSchema = ProblemSchema.and(
  z
    .object({
      parameter: z.string(),
      resource_id: z.string(),
      resource_type: z.enum(['user', 'tweet', 'media', 'list', 'space']),
      section: z.enum(['data', 'includes']),
      value: z.string(),
    })
    .openapi({ required: ['value', 'resource_id', 'resource_type', 'section', 'parameter'] }),
)
  .openapi({
    description:
      'A problem that indicates you are not allowed to see a particular Tweet, User, etc.',
  })
  .openapi('ResourceUnauthorizedProblem')

const ResourceUnavailableProblemSchema = ProblemSchema.and(
  z
    .object({
      parameter: z.string().min(1),
      resource_id: z.string(),
      resource_type: z.enum(['user', 'tweet', 'media', 'list', 'space']),
    })
    .openapi({ required: ['parameter', 'resource_id', 'resource_type'] }),
)
  .openapi({
    description: 'A problem that indicates a particular Tweet, User, etc. is not available to you.',
  })
  .openapi('ResourceUnavailableProblem')

const RulesCapProblemSchema = ProblemSchema.openapi({
  description: 'You have exceeded the maximum number of rules.',
}).openapi('RulesCapProblem')

const RulesLookupResponseSchema = z
  .object({ data: z.array(RuleSchema).exactOptional(), meta: RulesResponseMetadataSchema })
  .openapi({ required: ['meta'] })
  .openapi('RulesLookupResponse')

const StreamingTweetResponseSchema = z
  .object({
    data: TweetSchema.exactOptional(),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
    includes: ExpansionsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StreamingTweetResponse')

const TweetComplianceSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    quote_tweet_id: TweetIdSchema.exactOptional(),
    tweet: z
      .object({ author_id: UserIdSchema, id: TweetIdSchema })
      .openapi({ required: ['id', 'author_id'] }),
  })
  .openapi({ required: ['tweet', 'event_at'] })
  .openapi('TweetComplianceSchema')

const TweetDeleteComplianceSchemaSchema = z
  .object({ delete: TweetComplianceSchemaSchema })
  .openapi({ required: ['delete'] })
  .openapi('TweetDeleteComplianceSchema')

const TweetTakedownComplianceSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    quote_tweet_id: TweetIdSchema.exactOptional(),
    tweet: z
      .object({ author_id: UserIdSchema, id: TweetIdSchema })
      .openapi({ required: ['id', 'author_id'] }),
    withheld_in_countries: z.array(CountryCodeSchema).min(1),
  })
  .openapi({ required: ['tweet', 'withheld_in_countries', 'event_at'] })
  .openapi('TweetTakedownComplianceSchema')

const TweetWithheldComplianceSchemaSchema = z
  .object({ withheld: TweetTakedownComplianceSchemaSchema })
  .openapi({ required: ['withheld'] })
  .openapi('TweetWithheldComplianceSchema')

const TweetDropComplianceSchemaSchema = z
  .object({ drop: TweetComplianceSchemaSchema })
  .openapi({ required: ['drop'] })
  .openapi('TweetDropComplianceSchema')

const TweetUndropComplianceSchemaSchema = z
  .object({ undrop: TweetComplianceSchemaSchema })
  .openapi({ required: ['undrop'] })
  .openapi('TweetUndropComplianceSchema')

const TweetEditComplianceObjectSchemaSchema = z
  .object({
    edit_tweet_ids: z.array(TweetIdSchema).min(1),
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    initial_tweet_id: TweetIdSchema,
    tweet: z.object({ id: TweetIdSchema }).openapi({ required: ['id'] }),
  })
  .openapi({ required: ['tweet', 'event_at', 'initial_tweet_id', 'edit_tweet_ids'] })
  .openapi('TweetEditComplianceObjectSchema')

const TweetEditComplianceSchemaSchema = z
  .object({ tweet_edit: TweetEditComplianceObjectSchemaSchema })
  .openapi({ required: ['tweet_edit'] })
  .openapi('TweetEditComplianceSchema')

const TweetComplianceDataSchema = z
  .xor([
    TweetDeleteComplianceSchemaSchema,
    TweetWithheldComplianceSchemaSchema,
    TweetDropComplianceSchemaSchema,
    TweetUndropComplianceSchemaSchema,
    TweetEditComplianceSchemaSchema,
  ])
  .openapi({ description: 'Tweet compliance data.' })
  .openapi('TweetComplianceData')

const TweetComplianceStreamResponseSchema = z
  .xor([
    z
      .object({ data: TweetComplianceDataSchema })
      .openapi({ description: 'Compliance event.', required: ['data'] }),
    z.object({ errors: z.array(ProblemSchema).min(1) }).openapi({ required: ['errors'] }),
  ])
  .openapi({ description: 'Tweet compliance stream events.' })
  .openapi('TweetComplianceStreamResponse')

const TweetCreateRequestSchema = z
  .strictObject({
    card_uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.',
      }),
    direct_message_deep_link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link to take the conversation from the public timeline to a private Direct Message.',
      }),
    for_super_followers_only: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Exclusive Tweet for super followers.' }),
    geo: z
      .strictObject({ place_id: z.string().exactOptional() })
      .exactOptional()
      .openapi({
        description: 'Place ID being attached to the Tweet for geo location.',
        required: [],
      }),
    media: z
      .strictObject({
        media_ids: z
          .array(MediaIdSchema)
          .min(1)
          .max(4)
          .openapi({ description: 'A list of Media Ids to be attached to a created Tweet.' }),
        tagged_user_ids: z
          .array(UserIdSchema)
          .min(0)
          .max(10)
          .exactOptional()
          .openapi({
            description: 'A list of User Ids to be tagged in the media for created Tweet.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.',
        required: ['media_ids'],
      }),
    nullcast: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers.',
      }),
    poll: z
      .strictObject({
        duration_minutes: z
          .int32()
          .min(5)
          .max(10080)
          .openapi({ description: 'Duration of the poll in minutes.' }),
        options: z
          .array(z.string().min(1).max(25).openapi({ description: 'The text of a poll choice.' }))
          .min(2)
          .max(4),
        reply_settings: z
          .enum(['following', 'mentionedUsers'])
          .exactOptional()
          .openapi({ description: 'Settings to indicate who can reply to the Tweet.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.',
        required: ['options', 'duration_minutes'],
      }),
    quote_tweet_id: TweetIdSchema.exactOptional(),
    reply: z
      .strictObject({
        exclude_reply_user_ids: z
          .array(UserIdSchema)
          .exactOptional()
          .openapi({ description: 'A list of User Ids to be excluded from the reply Tweet.' }),
        in_reply_to_tweet_id: TweetIdSchema,
      })
      .exactOptional()
      .openapi({
        description: 'Tweet information of the Tweet being replied to.',
        required: ['in_reply_to_tweet_id'],
      }),
    reply_settings: z
      .enum(['following', 'mentionedUsers'])
      .exactOptional()
      .openapi({ description: 'Settings to indicate who can reply to the Tweet.' }),
    text: TweetTextSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TweetCreateRequest')

const TweetCreateResponseSchema = z
  .object({
    data: z
      .object({ id: TweetIdSchema, text: TweetTextSchema })
      .exactOptional()
      .openapi({ required: ['id', 'text'] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TweetCreateResponse')

const TweetDeleteResponseSchema = z
  .object({
    data: z
      .object({ deleted: z.boolean() })
      .exactOptional()
      .openapi({ required: ['deleted'] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TweetDeleteResponse')

const TweetHideRequestSchema = z
  .object({ hidden: z.boolean() })
  .openapi({ required: ['hidden'] })
  .openapi('TweetHideRequest')

const TweetHideResponseSchema = z
  .object({
    data: z
      .object({ hidden: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('TweetHideResponse')

const TweetNoticeSchema = z
  .object({
    application: z
      .string()
      .openapi({
        description:
          'If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.',
        example: 'apply',
      }),
    details: z
      .string()
      .exactOptional()
      .openapi({ description: 'Information shown on the Tweet label' }),
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    event_type: z
      .string()
      .openapi({ description: 'The type of label on the Tweet', example: 'misleading' }),
    extended_details_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to more information about this kind of label' }),
    label_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title/header of the Tweet label' }),
    tweet: z
      .object({ author_id: UserIdSchema, id: TweetIdSchema })
      .openapi({ required: ['id', 'author_id'] }),
  })
  .openapi({ required: ['tweet', 'event_type', 'event_at', 'application'] })
  .openapi('TweetNotice')

const TweetNoticeSchemaSchema = z
  .object({ public_tweet_notice: TweetNoticeSchema })
  .openapi({ required: ['public_tweet_notice'] })
  .openapi('TweetNoticeSchema')

const TweetUnviewableSchema = z
  .object({
    application: z
      .string()
      .openapi({
        description:
          'If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.',
        example: 'apply',
      }),
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    tweet: z
      .object({ author_id: UserIdSchema, id: TweetIdSchema })
      .openapi({ required: ['id', 'author_id'] }),
  })
  .openapi({ required: ['tweet', 'event_at', 'application'] })
  .openapi('TweetUnviewable')

const TweetUnviewableSchemaSchema = z
  .object({ public_tweet_unviewable: TweetUnviewableSchema })
  .openapi({ required: ['public_tweet_unviewable'] })
  .openapi('TweetUnviewableSchema')

const TweetLabelDataSchema = z
  .xor([TweetNoticeSchemaSchema, TweetUnviewableSchemaSchema])
  .openapi({ description: 'Tweet label data.' })
  .openapi('TweetLabelData')

const TweetLabelStreamResponseSchema = z
  .xor([
    z
      .object({ data: TweetLabelDataSchema })
      .openapi({ description: 'Tweet Label event.', required: ['data'] }),
    z.object({ errors: z.array(ProblemSchema).min(1) }).openapi({ required: ['errors'] }),
  ])
  .openapi({ description: 'Tweet label stream events.' })
  .openapi('TweetLabelStreamResponse')

const UnsupportedAuthenticationProblemSchema = ProblemSchema.openapi({
  description: 'A problem that indicates that the authentication used is not supported.',
}).openapi('UnsupportedAuthenticationProblem')

const UsageCapExceededProblemSchema = ProblemSchema.and(
  z
    .object({
      period: z.enum(['Daily', 'Monthly']).exactOptional(),
      scope: z.enum(['Account', 'Product']).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'A problem that indicates that a usage cap has been exceeded.' })
  .openapi('UsageCapExceededProblem')

const UserComplianceSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    user: z.object({ id: UserIdSchema }).openapi({ required: ['id'] }),
  })
  .openapi({ required: ['user', 'event_at'] })
  .openapi('UserComplianceSchema')

const UserProtectComplianceSchemaSchema = z
  .object({ user_protect: UserComplianceSchemaSchema })
  .openapi({ required: ['user_protect'] })
  .openapi('UserProtectComplianceSchema')

const UserUnprotectComplianceSchemaSchema = z
  .object({ user_unprotect: UserComplianceSchemaSchema })
  .openapi({ required: ['user_unprotect'] })
  .openapi('UserUnprotectComplianceSchema')

const UserDeleteComplianceSchemaSchema = z
  .object({ user_delete: UserComplianceSchemaSchema })
  .openapi({ required: ['user_delete'] })
  .openapi('UserDeleteComplianceSchema')

const UserUndeleteComplianceSchemaSchema = z
  .object({ user_undelete: UserComplianceSchemaSchema })
  .openapi({ required: ['user_undelete'] })
  .openapi('UserUndeleteComplianceSchema')

const UserSuspendComplianceSchemaSchema = z
  .object({ user_suspend: UserComplianceSchemaSchema })
  .openapi({ required: ['user_suspend'] })
  .openapi('UserSuspendComplianceSchema')

const UserUnsuspendComplianceSchemaSchema = z
  .object({ user_unsuspend: UserComplianceSchemaSchema })
  .openapi({ required: ['user_unsuspend'] })
  .openapi('UserUnsuspendComplianceSchema')

const UserTakedownComplianceSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    user: z.object({ id: UserIdSchema }).openapi({ required: ['id'] }),
    withheld_in_countries: z.array(CountryCodeSchema).min(1),
  })
  .openapi({ required: ['user', 'withheld_in_countries', 'event_at'] })
  .openapi('UserTakedownComplianceSchema')

const UserWithheldComplianceSchemaSchema = z
  .object({ user_withheld: UserTakedownComplianceSchemaSchema })
  .openapi({ required: ['user_withheld'] })
  .openapi('UserWithheldComplianceSchema')

const UserScrubGeoObjectSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    up_to_tweet_id: TweetIdSchema,
    user: z.object({ id: UserIdSchema }).openapi({ required: ['id'] }),
  })
  .openapi({ required: ['user', 'up_to_tweet_id', 'event_at'] })
  .openapi('UserScrubGeoObjectSchema')

const UserScrubGeoSchemaSchema = z
  .object({ scrub_geo: UserScrubGeoObjectSchemaSchema })
  .openapi({ required: ['scrub_geo'] })
  .openapi('UserScrubGeoSchema')

const UserProfileModificationObjectSchemaSchema = z
  .object({
    event_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Event time.', example: '2021-07-06T18:40:40.000Z' }),
    new_value: z.string(),
    profile_field: z.string(),
    user: z.object({ id: UserIdSchema }).openapi({ required: ['id'] }),
  })
  .openapi({ required: ['user', 'profile_field', 'new_value', 'event_at'] })
  .openapi('UserProfileModificationObjectSchema')

const UserProfileModificationComplianceSchemaSchema = z
  .object({ user_profile_modification: UserProfileModificationObjectSchemaSchema })
  .openapi({ required: ['user_profile_modification'] })
  .openapi('UserProfileModificationComplianceSchema')

const UserComplianceDataSchema = z
  .xor([
    UserProtectComplianceSchemaSchema,
    UserUnprotectComplianceSchemaSchema,
    UserDeleteComplianceSchemaSchema,
    UserUndeleteComplianceSchemaSchema,
    UserSuspendComplianceSchemaSchema,
    UserUnsuspendComplianceSchemaSchema,
    UserWithheldComplianceSchemaSchema,
    UserScrubGeoSchemaSchema,
    UserProfileModificationComplianceSchemaSchema,
  ])
  .openapi({ description: 'User compliance data.' })
  .openapi('UserComplianceData')

const UserComplianceStreamResponseSchema = z
  .xor([
    z
      .object({ data: UserComplianceDataSchema })
      .openapi({ description: 'User compliance event.', required: ['data'] }),
    z.object({ errors: z.array(ProblemSchema).min(1) }).openapi({ required: ['errors'] }),
  ])
  .openapi({ description: 'User compliance stream events.' })
  .openapi('UserComplianceStreamResponse')

const UserIdMatchesAuthenticatedUserSchema = z
  .string()
  .openapi({
    description:
      'Unique identifier of this User. The value must be the same as the authenticated user.',
    example: '2244994945',
  })
  .openapi('UserIdMatchesAuthenticatedUser')

const UsersFollowingCreateRequestSchema = z
  .object({ target_user_id: UserIdSchema })
  .openapi({ required: ['target_user_id'] })
  .openapi('UsersFollowingCreateRequest')

const UsersFollowingCreateResponseSchema = z
  .object({
    data: z
      .object({
        following: z.boolean().exactOptional(),
        pending_follow: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersFollowingCreateResponse')

const UsersFollowingDeleteResponseSchema = z
  .object({
    data: z
      .object({ following: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersFollowingDeleteResponse')

const UsersLikesCreateRequestSchema = z
  .object({ tweet_id: TweetIdSchema })
  .openapi({ required: ['tweet_id'] })
  .openapi('UsersLikesCreateRequest')

const UsersLikesCreateResponseSchema = z
  .object({
    data: z
      .object({ liked: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersLikesCreateResponse')

const UsersLikesDeleteResponseSchema = z
  .object({
    data: z
      .object({ liked: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersLikesDeleteResponse')

const UsersRetweetsCreateRequestSchema = z
  .object({ tweet_id: TweetIdSchema })
  .openapi({ required: ['tweet_id'] })
  .openapi('UsersRetweetsCreateRequest')

const UsersRetweetsCreateResponseSchema = z
  .object({
    data: z
      .object({ retweeted: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersRetweetsCreateResponse')

const UsersRetweetsDeleteResponseSchema = z
  .object({
    data: z
      .object({ retweeted: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    errors: z.array(ProblemSchema).min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UsersRetweetsDeleteResponse')

const VideoSchema = MediaSchema.and(
  z
    .object({
      duration_ms: z.int().exactOptional(),
      non_public_metrics: z
        .object({
          playback_0_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 0% of the video.' }),
          playback_100_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 100% of the video.' }),
          playback_25_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 25% of the video.' }),
          playback_50_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 50% of the video.' }),
          playback_75_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 75% of the video.' }),
        })
        .exactOptional()
        .openapi({
          description: 'Nonpublic engagement metrics for the Media at the time of the request.',
          required: [],
        }),
      organic_metrics: z
        .object({
          playback_0_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 0% of the video.' }),
          playback_100_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 100% of the video.' }),
          playback_25_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 25% of the video.' }),
          playback_50_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 50% of the video.' }),
          playback_75_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 75% of the video.' }),
          view_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of times this video has been viewed.' }),
        })
        .exactOptional()
        .openapi({
          description:
            'Organic nonpublic engagement metrics for the Media at the time of the request.',
          required: [],
        }),
      preview_image_url: z.url().exactOptional(),
      promoted_metrics: z
        .object({
          playback_0_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 0% of the video.' }),
          playback_100_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 100% of the video.' }),
          playback_25_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 25% of the video.' }),
          playback_50_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 50% of the video.' }),
          playback_75_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of users who made it through 75% of the video.' }),
          view_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of times this video has been viewed.' }),
        })
        .exactOptional()
        .openapi({
          description:
            'Promoted nonpublic engagement metrics for the Media at the time of the request.',
          required: [],
        }),
      public_metrics: z
        .object({
          view_count: z
            .int32()
            .exactOptional()
            .openapi({ description: 'Number of times this video has been viewed.' }),
        })
        .exactOptional()
        .openapi({
          description: 'Engagement metrics for the Media at the time of the request.',
          required: [],
        }),
      variants: VariantsSchema.exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('Video')

const ComplianceJobFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'created_at',
          'download_expires_at',
          'download_url',
          'id',
          'name',
          'resumable',
          'status',
          'type',
          'upload_expires_at',
          'upload_url',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of ComplianceJob fields to display.',
      explode: false,
      in: 'query',
      name: 'compliance_job.fields',
      required: false,
      schema: {
        description: 'The fields available for a ComplianceJob object.',
        example: [
          'created_at',
          'download_expires_at',
          'download_url',
          'id',
          'name',
          'resumable',
          'status',
          'type',
          'upload_expires_at',
          'upload_url',
        ],
        items: {
          enum: [
            'created_at',
            'download_expires_at',
            'download_url',
            'id',
            'name',
            'resumable',
            'status',
            'type',
            'upload_expires_at',
            'upload_url',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a ComplianceJob object.',
    example: [
      'created_at',
      'download_expires_at',
      'download_url',
      'id',
      'name',
      'resumable',
      'status',
      'type',
      'upload_expires_at',
      'upload_url',
    ],
  })

const DmConversationFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.literal('id'))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of DmConversation fields to display.',
      explode: false,
      in: 'query',
      name: 'dm_conversation.fields',
      required: false,
      schema: {
        description: 'The fields available for a DmConversation object.',
        example: ['id'],
        items: { enum: ['id'], type: 'string' },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a DmConversation object.',
    example: ['id'],
  })

const DmEventExpansionsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum(['attachments.media_keys', 'participant_ids', 'referenced_tweets.id', 'sender_id']),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of fields to expand.',
      explode: false,
      in: 'query',
      name: 'expansions',
      schema: {
        description:
          'The list of fields you can expand for a [DmEvent](#DmEvent) object. If the field has an ID, it can be expanded into a full object.',
        example: ['attachments.media_keys', 'participant_ids', 'referenced_tweets.id', 'sender_id'],
        items: {
          enum: ['attachments.media_keys', 'participant_ids', 'referenced_tweets.id', 'sender_id'],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
      required: false,
    },
    description:
      'The list of fields you can expand for a [DmEvent](#DmEvent) object. If the field has an ID, it can be expanded into a full object.',
    example: ['attachments.media_keys', 'participant_ids', 'referenced_tweets.id', 'sender_id'],
  })

const DmEventFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'attachments',
          'created_at',
          'dm_conversation_id',
          'event_type',
          'id',
          'participant_ids',
          'referenced_tweets',
          'sender_id',
          'text',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of DmEvent fields to display.',
      explode: false,
      in: 'query',
      name: 'dm_event.fields',
      required: false,
      schema: {
        description: 'The fields available for a DmEvent object.',
        example: [
          'attachments',
          'created_at',
          'dm_conversation_id',
          'event_type',
          'id',
          'participant_ids',
          'referenced_tweets',
          'sender_id',
          'text',
        ],
        items: {
          enum: [
            'attachments',
            'created_at',
            'dm_conversation_id',
            'event_type',
            'id',
            'participant_ids',
            'referenced_tweets',
            'sender_id',
            'text',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a DmEvent object.',
    example: [
      'attachments',
      'created_at',
      'dm_conversation_id',
      'event_type',
      'id',
      'participant_ids',
      'referenced_tweets',
      'sender_id',
      'text',
    ],
  })

const ListExpansionsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.literal('owner_id'))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of fields to expand.',
      explode: false,
      in: 'query',
      name: 'expansions',
      schema: {
        description:
          'The list of fields you can expand for a [List](#List) object. If the field has an ID, it can be expanded into a full object.',
        example: ['owner_id'],
        items: { enum: ['owner_id'], type: 'string' },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
      required: false,
    },
    description:
      'The list of fields you can expand for a [List](#List) object. If the field has an ID, it can be expanded into a full object.',
    example: ['owner_id'],
  })

const ListFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'created_at',
          'description',
          'follower_count',
          'id',
          'member_count',
          'name',
          'owner_id',
          'private',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of List fields to display.',
      explode: false,
      in: 'query',
      name: 'list.fields',
      required: false,
      schema: {
        description: 'The fields available for a List object.',
        example: [
          'created_at',
          'description',
          'follower_count',
          'id',
          'member_count',
          'name',
          'owner_id',
          'private',
        ],
        items: {
          enum: [
            'created_at',
            'description',
            'follower_count',
            'id',
            'member_count',
            'name',
            'owner_id',
            'private',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a List object.',
    example: [
      'created_at',
      'description',
      'follower_count',
      'id',
      'member_count',
      'name',
      'owner_id',
      'private',
    ],
  })

const MediaFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'alt_text',
          'duration_ms',
          'height',
          'media_key',
          'non_public_metrics',
          'organic_metrics',
          'preview_image_url',
          'promoted_metrics',
          'public_metrics',
          'type',
          'url',
          'variants',
          'width',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Media fields to display.',
      explode: false,
      in: 'query',
      name: 'media.fields',
      required: false,
      schema: {
        description: 'The fields available for a Media object.',
        example: [
          'alt_text',
          'duration_ms',
          'height',
          'media_key',
          'non_public_metrics',
          'organic_metrics',
          'preview_image_url',
          'promoted_metrics',
          'public_metrics',
          'type',
          'url',
          'variants',
          'width',
        ],
        items: {
          enum: [
            'alt_text',
            'duration_ms',
            'height',
            'media_key',
            'non_public_metrics',
            'organic_metrics',
            'preview_image_url',
            'promoted_metrics',
            'public_metrics',
            'type',
            'url',
            'variants',
            'width',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Media object.',
    example: [
      'alt_text',
      'duration_ms',
      'height',
      'media_key',
      'non_public_metrics',
      'organic_metrics',
      'preview_image_url',
      'promoted_metrics',
      'public_metrics',
      'type',
      'url',
      'variants',
      'width',
    ],
  })

const PlaceFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'contained_within',
          'country',
          'country_code',
          'full_name',
          'geo',
          'id',
          'name',
          'place_type',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Place fields to display.',
      explode: false,
      in: 'query',
      name: 'place.fields',
      required: false,
      schema: {
        description: 'The fields available for a Place object.',
        example: [
          'contained_within',
          'country',
          'country_code',
          'full_name',
          'geo',
          'id',
          'name',
          'place_type',
        ],
        items: {
          enum: [
            'contained_within',
            'country',
            'country_code',
            'full_name',
            'geo',
            'id',
            'name',
            'place_type',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Place object.',
    example: [
      'contained_within',
      'country',
      'country_code',
      'full_name',
      'geo',
      'id',
      'name',
      'place_type',
    ],
  })

const PollFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.enum(['duration_minutes', 'end_datetime', 'id', 'options', 'voting_status']))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Poll fields to display.',
      explode: false,
      in: 'query',
      name: 'poll.fields',
      required: false,
      schema: {
        description: 'The fields available for a Poll object.',
        example: ['duration_minutes', 'end_datetime', 'id', 'options', 'voting_status'],
        items: {
          enum: ['duration_minutes', 'end_datetime', 'id', 'options', 'voting_status'],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Poll object.',
    example: ['duration_minutes', 'end_datetime', 'id', 'options', 'voting_status'],
  })

const SearchCountFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.enum(['end', 'start', 'tweet_count']))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of SearchCount fields to display.',
      explode: false,
      in: 'query',
      name: 'search_count.fields',
      required: false,
      schema: {
        description: 'The fields available for a SearchCount object.',
        example: ['end', 'start', 'tweet_count'],
        items: { enum: ['end', 'start', 'tweet_count'], type: 'string' },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a SearchCount object.',
    example: ['end', 'start', 'tweet_count'],
  })

const SpaceExpansionsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.enum(['creator_id', 'host_ids', 'invited_user_ids', 'speaker_ids', 'topic_ids']))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of fields to expand.',
      explode: false,
      in: 'query',
      name: 'expansions',
      schema: {
        description:
          'The list of fields you can expand for a [Space](#Space) object. If the field has an ID, it can be expanded into a full object.',
        example: ['creator_id', 'host_ids', 'invited_user_ids', 'speaker_ids', 'topic_ids'],
        items: {
          enum: ['creator_id', 'host_ids', 'invited_user_ids', 'speaker_ids', 'topic_ids'],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
      required: false,
    },
    description:
      'The list of fields you can expand for a [Space](#Space) object. If the field has an ID, it can be expanded into a full object.',
    example: ['creator_id', 'host_ids', 'invited_user_ids', 'speaker_ids', 'topic_ids'],
  })

const SpaceFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'created_at',
          'creator_id',
          'ended_at',
          'host_ids',
          'id',
          'invited_user_ids',
          'is_ticketed',
          'lang',
          'participant_count',
          'scheduled_start',
          'speaker_ids',
          'started_at',
          'state',
          'subscriber_count',
          'title',
          'topic_ids',
          'updated_at',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Space fields to display.',
      explode: false,
      in: 'query',
      name: 'space.fields',
      required: false,
      schema: {
        description: 'The fields available for a Space object.',
        example: [
          'created_at',
          'creator_id',
          'ended_at',
          'host_ids',
          'id',
          'invited_user_ids',
          'is_ticketed',
          'lang',
          'participant_count',
          'scheduled_start',
          'speaker_ids',
          'started_at',
          'state',
          'subscriber_count',
          'title',
          'topic_ids',
          'updated_at',
        ],
        items: {
          enum: [
            'created_at',
            'creator_id',
            'ended_at',
            'host_ids',
            'id',
            'invited_user_ids',
            'is_ticketed',
            'lang',
            'participant_count',
            'scheduled_start',
            'speaker_ids',
            'started_at',
            'state',
            'subscriber_count',
            'title',
            'topic_ids',
            'updated_at',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Space object.',
    example: [
      'created_at',
      'creator_id',
      'ended_at',
      'host_ids',
      'id',
      'invited_user_ids',
      'is_ticketed',
      'lang',
      'participant_count',
      'scheduled_start',
      'speaker_ids',
      'started_at',
      'state',
      'subscriber_count',
      'title',
      'topic_ids',
      'updated_at',
    ],
  })

const TopicFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.enum(['description', 'id', 'name']))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Topic fields to display.',
      explode: false,
      in: 'query',
      name: 'topic.fields',
      required: false,
      schema: {
        description: 'The fields available for a Topic object.',
        example: ['description', 'id', 'name'],
        items: { enum: ['description', 'id', 'name'], type: 'string' },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Topic object.',
    example: ['description', 'id', 'name'],
  })

const TweetExpansionsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'attachments.media_keys',
          'attachments.poll_ids',
          'author_id',
          'edit_history_tweet_ids',
          'entities.mentions.username',
          'geo.place_id',
          'in_reply_to_user_id',
          'referenced_tweets.id',
          'referenced_tweets.id.author_id',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of fields to expand.',
      explode: false,
      in: 'query',
      name: 'expansions',
      schema: {
        description:
          'The list of fields you can expand for a [Tweet](#Tweet) object. If the field has an ID, it can be expanded into a full object.',
        example: [
          'attachments.media_keys',
          'attachments.poll_ids',
          'author_id',
          'edit_history_tweet_ids',
          'entities.mentions.username',
          'geo.place_id',
          'in_reply_to_user_id',
          'referenced_tweets.id',
          'referenced_tweets.id.author_id',
        ],
        items: {
          enum: [
            'attachments.media_keys',
            'attachments.poll_ids',
            'author_id',
            'edit_history_tweet_ids',
            'entities.mentions.username',
            'geo.place_id',
            'in_reply_to_user_id',
            'referenced_tweets.id',
            'referenced_tweets.id.author_id',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
      required: false,
    },
    description:
      'The list of fields you can expand for a [Tweet](#Tweet) object. If the field has an ID, it can be expanded into a full object.',
    example: [
      'attachments.media_keys',
      'attachments.poll_ids',
      'author_id',
      'edit_history_tweet_ids',
      'entities.mentions.username',
      'geo.place_id',
      'in_reply_to_user_id',
      'referenced_tweets.id',
      'referenced_tweets.id.author_id',
    ],
  })

const TweetFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'attachments',
          'author_id',
          'context_annotations',
          'conversation_id',
          'created_at',
          'edit_controls',
          'edit_history_tweet_ids',
          'entities',
          'geo',
          'id',
          'in_reply_to_user_id',
          'lang',
          'non_public_metrics',
          'organic_metrics',
          'possibly_sensitive',
          'promoted_metrics',
          'public_metrics',
          'referenced_tweets',
          'reply_settings',
          'source',
          'text',
          'withheld',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of Tweet fields to display.',
      explode: false,
      in: 'query',
      name: 'tweet.fields',
      required: false,
      schema: {
        description: 'The fields available for a Tweet object.',
        example: [
          'attachments',
          'author_id',
          'context_annotations',
          'conversation_id',
          'created_at',
          'edit_controls',
          'edit_history_tweet_ids',
          'entities',
          'geo',
          'id',
          'in_reply_to_user_id',
          'lang',
          'non_public_metrics',
          'organic_metrics',
          'possibly_sensitive',
          'promoted_metrics',
          'public_metrics',
          'referenced_tweets',
          'reply_settings',
          'source',
          'text',
          'withheld',
        ],
        items: {
          enum: [
            'attachments',
            'author_id',
            'context_annotations',
            'conversation_id',
            'created_at',
            'edit_controls',
            'edit_history_tweet_ids',
            'entities',
            'geo',
            'id',
            'in_reply_to_user_id',
            'lang',
            'non_public_metrics',
            'organic_metrics',
            'possibly_sensitive',
            'promoted_metrics',
            'public_metrics',
            'referenced_tweets',
            'reply_settings',
            'source',
            'text',
            'withheld',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a Tweet object.',
    example: [
      'attachments',
      'author_id',
      'context_annotations',
      'conversation_id',
      'created_at',
      'edit_controls',
      'edit_history_tweet_ids',
      'entities',
      'geo',
      'id',
      'in_reply_to_user_id',
      'lang',
      'non_public_metrics',
      'organic_metrics',
      'possibly_sensitive',
      'promoted_metrics',
      'public_metrics',
      'referenced_tweets',
      'reply_settings',
      'source',
      'text',
      'withheld',
    ],
  })

const UserExpansionsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(z.literal('pinned_tweet_id'))
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of fields to expand.',
      explode: false,
      in: 'query',
      name: 'expansions',
      schema: {
        description:
          'The list of fields you can expand for a [User](#User) object. If the field has an ID, it can be expanded into a full object.',
        example: ['pinned_tweet_id'],
        items: { enum: ['pinned_tweet_id'], type: 'string' },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
      required: false,
    },
    description:
      'The list of fields you can expand for a [User](#User) object. If the field has an ID, it can be expanded into a full object.',
    example: ['pinned_tweet_id'],
  })

const UserFieldsParameterParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z
      .array(
        z.enum([
          'created_at',
          'description',
          'entities',
          'id',
          'location',
          'name',
          'pinned_tweet_id',
          'profile_image_url',
          'protected',
          'public_metrics',
          'url',
          'username',
          'verified',
          'verified_type',
          'withheld',
        ]),
      )
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  )
  .exactOptional()
  .openapi({
    param: {
      description: 'A comma separated list of User fields to display.',
      explode: false,
      in: 'query',
      name: 'user.fields',
      required: false,
      schema: {
        description: 'The fields available for a User object.',
        example: [
          'created_at',
          'description',
          'entities',
          'id',
          'location',
          'name',
          'pinned_tweet_id',
          'profile_image_url',
          'protected',
          'public_metrics',
          'url',
          'username',
          'verified',
          'verified_type',
          'withheld',
        ],
        items: {
          enum: [
            'created_at',
            'description',
            'entities',
            'id',
            'location',
            'name',
            'pinned_tweet_id',
            'profile_image_url',
            'protected',
            'public_metrics',
            'url',
            'username',
            'verified',
            'verified_type',
            'withheld',
          ],
          type: 'string',
        },
        minItems: 1,
        type: 'array',
        uniqueItems: true,
      },
      style: 'form',
    },
    description: 'The fields available for a User object.',
    example: [
      'created_at',
      'description',
      'entities',
      'id',
      'location',
      'name',
      'pinned_tweet_id',
      'profile_image_url',
      'protected',
      'public_metrics',
      'url',
      'username',
      'verified',
      'verified_type',
      'withheld',
    ],
  })

const BearerTokenSecurityScheme = { scheme: 'bearer', type: 'http' }

const OAuth2UserTokenSecurityScheme = {
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://api.twitter.com/2/oauth2/authorize',
      scopes: {
        'block.read': 'Accounts you’ve blocked.',
        'block.write': 'Block and unblock accounts for you.',
        'bookmark.read': 'Allows an app to read bookmarked Tweets',
        'bookmark.write': 'Allows an app to create and delete bookmarks',
        'dm.read': 'All your Direct Messages',
        'dm.write': 'Send and manage Direct Messages for you',
        'follows.read': 'People who follow you and people who you follow.',
        'follows.write': 'Follow and unfollow people for you.',
        'like.read': 'Tweets you’ve liked and likes you can view.',
        'like.write': 'Like and un-like Tweets for you.',
        'list.read':
          'Lists, list members, and list followers of lists you’ve created or are a member of, including private lists.',
        'list.write': 'Create and manage Lists for you.',
        'mute.read': 'Accounts you’ve muted.',
        'mute.write': 'Mute and unmute accounts for you.',
        'offline.access': 'App can request refresh token.',
        'space.read': 'Access all of the Spaces you can see.',
        'tweet.moderate.write': 'Hide and unhide replies to your Tweets.',
        'tweet.read': 'All the Tweets you can see, including Tweets from protected accounts.',
        'tweet.write': 'Tweet and retweet for you.',
        'users.read':
          'Any account you can see, including protected accounts. Any account you can see, including protected accounts.',
      },
      tokenUrl: 'https://api.twitter.com/2/oauth2/token',
    },
  },
  type: 'oauth2',
}

const UserTokenSecurityScheme = { scheme: 'OAuth', type: 'http' }

export const get2ComplianceJobsRoute = createRoute({
  method: 'get',
  path: '/2/compliance/jobs',
  tags: ['Compliance'],
  summary: 'List Compliance Jobs',
  description: 'Returns recent Compliance Jobs for a given job type and optional job status',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs',
  },
  operationId: 'listBatchComplianceJobs',
  request: {
    query: z.object({
      type: z
        .enum(['tweets', 'users'])
        .openapi({
          param: {
            description: 'Type of Compliance Job to list.',
            in: 'query',
            name: 'type',
            required: true,
            schema: { enum: ['tweets', 'users'], type: 'string' },
            style: 'form',
          },
        }),
      status: z
        .enum(['created', 'in_progress', 'failed', 'complete'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Status of Compliance Job to list.',
            in: 'query',
            name: 'status',
            required: false,
            schema: { enum: ['created', 'in_progress', 'failed', 'complete'], type: 'string' },
            style: 'form',
          },
        }),
      'compliance_job.fields': ComplianceJobFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ComplianceJobsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const post2ComplianceJobsRoute = createRoute({
  method: 'post',
  path: '/2/compliance/jobs',
  tags: ['Compliance'],
  summary: 'Create compliance job',
  description: 'Creates a compliance for the given job type',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/post-compliance-jobs',
  },
  operationId: 'createBatchComplianceJob',
  request: {
    body: {
      content: { 'application/json': { schema: CreateComplianceJobRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: CreateComplianceJobResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2ComplianceJobsIdRoute = createRoute({
  method: 'get',
  path: '/2/compliance/jobs/{id}',
  tags: ['Compliance'],
  summary: 'Get Compliance Job',
  description: 'Returns a single Compliance Job by ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs-id',
  },
  operationId: 'getBatchComplianceJob',
  request: {
    params: z.object({
      id: JobIdSchema.openapi({
        param: {
          description: 'The ID of the Compliance Job to retrieve.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/JobId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({ 'compliance_job.fields': ComplianceJobFieldsParameterParamsSchema }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ComplianceJobsIdResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const post2DmConversationsRoute = createRoute({
  method: 'post',
  path: '/2/dm_conversations',
  tags: ['Direct Messages'],
  summary: 'Create a new DM Conversation',
  description: 'Creates a new DM Conversation.',
  operationId: 'dmConversationIdCreate',
  request: {
    body: { content: { 'application/json': { schema: CreateDmConversationRequestSchema } } },
  },
  responses: {
    201: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: CreateDmEventResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2DmConversationsWithParticipantIdDmEventsRoute = createRoute({
  method: 'get',
  path: '/2/dm_conversations/with/{participant_id}/dm_events',
  tags: ['Direct Messages'],
  summary: 'Get DM Events for a DM Conversation',
  description: 'Returns DM Events for a DM Conversation',
  operationId: 'getDmConversationsWithParticipantIdDmEvents',
  request: {
    params: z.object({
      participant_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the participant user for the One to One DM conversation.',
          in: 'path',
          name: 'participant_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      event_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.enum(['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave']))
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .default(['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The set of event_types to include in the results.',
            explode: false,
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              default: ['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'],
              example: ['MessageCreate', 'ParticipantsLeave'],
              items: {
                enum: ['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave'],
                type: 'string',
              },
              minItems: 1,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['MessageCreate', 'ParticipantsLeave'],
        }),
      'dm_event.fields': DmEventFieldsParameterParamsSchema,
      expansions: DmEventExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: {
        'application/json': { schema: Get2DmConversationsWithParticipantIdDmEventsResponseSchema },
      },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2DmConversationsWithParticipantIdMessagesRoute = createRoute({
  method: 'post',
  path: '/2/dm_conversations/with/{participant_id}/messages',
  tags: ['Direct Messages'],
  summary: 'Send a new message to a user',
  description: 'Creates a new message for a DM Conversation with a participant user by ID',
  operationId: 'dmConversationWithUserEventIdCreate',
  request: {
    params: z.object({
      participant_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the recipient user that will receive the DM.',
          in: 'path',
          name: 'participant_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: CreateMessageRequestSchema } } },
  },
  responses: {
    201: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: CreateDmEventResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2DmConversationsDmConversationIdMessagesRoute = createRoute({
  method: 'post',
  path: '/2/dm_conversations/{dm_conversation_id}/messages',
  tags: ['Direct Messages'],
  summary: 'Send a new message to a DM Conversation',
  description: 'Creates a new message for a DM Conversation specified by DM Conversation ID',
  operationId: 'dmConversationByIdEventIdCreate',
  request: {
    params: z.object({
      dm_conversation_id: z
        .string()
        .openapi({
          param: {
            description: 'The DM Conversation ID.',
            in: 'path',
            name: 'dm_conversation_id',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateMessageRequestSchema } } },
  },
  responses: {
    201: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: CreateDmEventResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2DmConversationsIdDmEventsRoute = createRoute({
  method: 'get',
  path: '/2/dm_conversations/{id}/dm_events',
  tags: ['Direct Messages'],
  summary: 'Get DM Events for a DM Conversation',
  description: 'Returns DM Events for a DM Conversation',
  operationId: 'getDmConversationsIdDmEvents',
  request: {
    params: z.object({
      id: DmConversationIdSchema.openapi({
        param: {
          description: 'The DM Conversation ID.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/DmConversationId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      event_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.enum(['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave']))
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .default(['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The set of event_types to include in the results.',
            explode: false,
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              default: ['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'],
              example: ['MessageCreate', 'ParticipantsLeave'],
              items: {
                enum: ['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave'],
                type: 'string',
              },
              minItems: 1,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['MessageCreate', 'ParticipantsLeave'],
        }),
      'dm_event.fields': DmEventFieldsParameterParamsSchema,
      expansions: DmEventExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2DmConversationsIdDmEventsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2DmEventsRoute = createRoute({
  method: 'get',
  path: '/2/dm_events',
  tags: ['Direct Messages'],
  summary: 'Get recent DM Events',
  description: 'Returns recent DM Events across DM conversations',
  operationId: 'getDmEvents',
  request: {
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      event_types: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.enum(['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave']))
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .default(['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The set of event_types to include in the results.',
            explode: false,
            in: 'query',
            name: 'event_types',
            required: false,
            schema: {
              default: ['MessageCreate', 'ParticipantsLeave', 'ParticipantsJoin'],
              example: ['MessageCreate', 'ParticipantsLeave'],
              items: {
                enum: ['MessageCreate', 'ParticipantsJoin', 'ParticipantsLeave'],
                type: 'string',
              },
              minItems: 1,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['MessageCreate', 'ParticipantsLeave'],
        }),
      'dm_event.fields': DmEventFieldsParameterParamsSchema,
      expansions: DmEventExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2DmEventsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['dm.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2ListsRoute = createRoute({
  method: 'post',
  path: '/2/lists',
  tags: ['Lists'],
  summary: 'Create List',
  description: 'Creates a new List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists',
  },
  operationId: 'listIdCreate',
  request: { body: { content: { 'application/json': { schema: ListCreateRequestSchema } } } },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListCreateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { OAuth2UserToken: ['list.read', 'list.write', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2ListsIdRoute = createRoute({
  method: 'get',
  path: '/2/lists/{id}',
  tags: ['Lists'],
  summary: 'List lookup by List ID.',
  description: 'Returns a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id',
  },
  operationId: 'listIdGet',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      'list.fields': ListFieldsParameterParamsSchema,
      expansions: ListExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ListsIdResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const put2ListsIdRoute = createRoute({
  method: 'put',
  path: '/2/lists/{id}',
  tags: ['Lists'],
  summary: 'Update List.',
  description: 'Update a List that you own.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id',
  },
  operationId: 'listIdUpdate',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List to modify.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: ListUpdateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListUpdateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2ListsIdRoute = createRoute({
  method: 'delete',
  path: '/2/lists/{id}',
  tags: ['Lists'],
  summary: 'Delete List',
  description: 'Delete a List that you own.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id',
  },
  operationId: 'listIdDelete',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List to delete.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListDeleteResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2ListsIdFollowersRoute = createRoute({
  method: 'get',
  path: '/2/lists/{id}/followers',
  tags: ['Users'],
  summary: 'Returns User objects that follow a List by the provided List ID',
  description: 'Returns a list of Users that follow a List by the provided List ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers',
  },
  operationId: 'listGetFollowers',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ListsIdFollowersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2ListsIdMembersRoute = createRoute({
  method: 'get',
  path: '/2/lists/{id}/members',
  tags: ['Users'],
  summary: 'Returns User objects that are members of a List by the provided List ID.',
  description: 'Returns a list of Users that are members of a List by the provided List ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships',
  },
  operationId: 'listGetMembers',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ListsIdMembersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const post2ListsIdMembersRoute = createRoute({
  method: 'post',
  path: '/2/lists/{id}/members',
  tags: ['Lists'],
  summary: 'Add a List member',
  description: 'Causes a User to become a member of a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members',
  },
  operationId: 'listAddMember',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List for which to add a member.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: ListAddUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListMutateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2ListsIdMembersUserIdRoute = createRoute({
  method: 'delete',
  path: '/2/lists/{id}/members/{user_id}',
  tags: ['Lists'],
  summary: 'Remove a List member',
  description: 'Causes a User to be removed from the members of a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id',
  },
  operationId: 'listRemoveMember',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List to remove a member.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
      user_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of User that will be removed from the List.',
          in: 'path',
          name: 'user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListMutateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2ListsIdTweetsRoute = createRoute({
  method: 'get',
  path: '/2/lists/{id}/tweets',
  tags: ['Tweets'],
  summary: 'List Tweets timeline by List ID.',
  description: 'Returns a list of Tweets associated with the provided List ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets',
  },
  operationId: 'listsIdTweets',
  request: {
    params: z.object({
      id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2ListsIdTweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2OpenapiJsonRoute = createRoute({
  method: 'get',
  path: '/2/openapi.json',
  tags: ['General'],
  summary: 'Returns the OpenAPI Specification document.',
  description:
    'Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)',
  operationId: 'getOpenApiSpec',
  responses: {
    200: {
      description: 'The request was successful',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const get2SpacesRoute = createRoute({
  method: 'get',
  path: '/2/spaces',
  tags: ['Spaces'],
  summary: 'Space lookup up Space IDs',
  description: 'Returns a variety of information about the Spaces specified by the requested IDs',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces',
  },
  operationId: 'findSpacesByIds',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z
            .array(
              z
                .string()
                .regex(/^[a-zA-Z0-9]{1,13}$/)
                .openapi({
                  description: 'The unique identifier of this Space.',
                  example: '1SLjjRYNejbKM',
                }),
            )
            .min(1)
            .max(100),
        )
        .openapi({
          param: {
            description: 'The list of Space IDs to return.',
            in: 'query',
            name: 'ids',
            required: true,
            schema: {
              items: {
                description: 'The unique identifier of this Space.',
                example: '1SLjjRYNejbKM',
                pattern: '^[a-zA-Z0-9]{1,13}$',
                type: 'string',
              },
              maxItems: 100,
              minItems: 1,
              type: 'array',
            },
            style: 'form',
          },
        }),
      'space.fields': SpaceFieldsParameterParamsSchema,
      expansions: SpaceExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'topic.fields': TopicFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }, { OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2SpacesByCreatorIdsRoute = createRoute({
  method: 'get',
  path: '/2/spaces/by/creator_ids',
  tags: ['Spaces'],
  summary: 'Space lookup by their creators',
  description: 'Returns a variety of information about the Spaces created by the provided User IDs',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids',
  },
  operationId: 'findSpacesByCreatorIds',
  request: {
    query: z.object({
      user_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(UserIdSchema).min(1).max(100),
        )
        .openapi({
          param: {
            description: 'The IDs of Users to search through.',
            in: 'query',
            name: 'user_ids',
            required: true,
            schema: {
              items: { $ref: '#/components/schemas/UserId' },
              maxItems: 100,
              minItems: 1,
              type: 'array',
            },
            style: 'form',
          },
        }),
      'space.fields': SpaceFieldsParameterParamsSchema,
      expansions: SpaceExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'topic.fields': TopicFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesByCreatorIdsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }, { OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2SpacesSearchRoute = createRoute({
  method: 'get',
  path: '/2/spaces/search',
  tags: ['Spaces'],
  summary: 'Search for Spaces',
  description: 'Returns Spaces that match the provided query.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search',
  },
  operationId: 'searchSpaces',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(2048)
        .openapi({
          param: {
            description: 'The search query.',
            example: 'crypto',
            in: 'query',
            name: 'query',
            required: true,
            schema: { example: 'crypto', maxLength: 2048, minLength: 1, type: 'string' },
            style: 'form',
          },
          example: 'crypto',
        }),
      state: z
        .enum(['live', 'scheduled', 'all'])
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: 'The state of Spaces to search for.',
            in: 'query',
            name: 'state',
            required: false,
            schema: { default: 'all', enum: ['live', 'scheduled', 'all'], type: 'string' },
            style: 'form',
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      'space.fields': SpaceFieldsParameterParamsSchema,
      expansions: SpaceExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'topic.fields': TopicFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesSearchResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }, { OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2SpacesIdRoute = createRoute({
  method: 'get',
  path: '/2/spaces/{id}',
  tags: ['Spaces'],
  summary: 'Space lookup by Space ID',
  description: 'Returns a variety of information about the Space specified by the requested ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id',
  },
  operationId: 'findSpaceById',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,13}$/)
        .openapi({
          param: {
            description: 'The ID of the Space to be retrieved.',
            example: '1YqKDqWqdPLsV',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique identifier of this Space.',
              example: '1SLjjRYNejbKM',
              pattern: '^[a-zA-Z0-9]{1,13}$',
              type: 'string',
            },
            style: 'simple',
          },
          description: 'The unique identifier of this Space.',
          example: '1SLjjRYNejbKM',
        }),
    }),
    query: z.object({
      'space.fields': SpaceFieldsParameterParamsSchema,
      expansions: SpaceExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'topic.fields': TopicFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesIdResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }, { OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2SpacesIdBuyersRoute = createRoute({
  method: 'get',
  path: '/2/spaces/{id}/buyers',
  tags: ['Spaces', 'Tweets'],
  summary: 'Retrieve the list of Users who purchased a ticket to the given space',
  description: 'Retrieves the list of Users who purchased a ticket to the given space',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers',
  },
  operationId: 'spaceBuyers',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,13}$/)
        .openapi({
          param: {
            description: 'The ID of the Space to be retrieved.',
            example: '1YqKDqWqdPLsV',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique identifier of this Space.',
              example: '1SLjjRYNejbKM',
              pattern: '^[a-zA-Z0-9]{1,13}$',
              type: 'string',
            },
            style: 'simple',
          },
          description: 'The unique identifier of this Space.',
          example: '1SLjjRYNejbKM',
        }),
    }),
    query: z.object({
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesIdBuyersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2SpacesIdTweetsRoute = createRoute({
  method: 'get',
  path: '/2/spaces/{id}/tweets',
  tags: ['Spaces', 'Tweets'],
  summary: 'Retrieve Tweets from a Space.',
  description: 'Retrieves Tweets shared in the specified Space.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets',
  },
  operationId: 'spaceTweets',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[a-zA-Z0-9]{1,13}$/)
        .openapi({
          param: {
            description: 'The ID of the Space to be retrieved.',
            example: '1YqKDqWqdPLsV',
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              description: 'The unique identifier of this Space.',
              example: '1SLjjRYNejbKM',
              pattern: '^[a-zA-Z0-9]{1,13}$',
              type: 'string',
            },
            style: 'simple',
          },
          description: 'The unique identifier of this Space.',
          example: '1SLjjRYNejbKM',
        }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: {
              default: 100,
              example: 25,
              format: 'int32',
              maximum: 100,
              minimum: 1,
              type: 'integer',
            },
            style: 'form',
          },
          example: 25,
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2SpacesIdTweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }, { OAuth2UserToken: ['space.read', 'tweet.read', 'users.read'] }],
})

export const get2TweetsRoute = createRoute({
  method: 'get',
  path: '/2/tweets',
  tags: ['Tweets'],
  summary: 'Tweet lookup by Tweet IDs',
  description: 'Returns a variety of information about the Tweet specified by the requested ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets',
  },
  operationId: 'findTweetsById',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(TweetIdSchema).min(1).max(100),
        )
        .openapi({
          param: {
            description:
              'A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.',
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: {
              items: { $ref: '#/components/schemas/TweetId' },
              maxItems: 100,
              minItems: 1,
              type: 'array',
            },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const post2TweetsRoute = createRoute({
  method: 'post',
  path: '/2/tweets',
  tags: ['Tweets'],
  summary: 'Creation of a Tweet',
  description: 'Causes the User to create a Tweet under the authorized account.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets',
  },
  operationId: 'createTweet',
  request: {
    body: { content: { 'application/json': { schema: TweetCreateRequestSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TweetCreateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'tweet.write', 'users.read'] }, { UserToken: [] }],
})

export const get2TweetsComplianceStreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/compliance/stream',
  tags: ['Compliance'],
  summary: 'Tweets Compliance stream',
  description: 'Streams 100% of compliance data for Tweets',
  operationId: 'getTweetsComplianceStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      partition: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(4),
        )
        .openapi({
          param: {
            description: 'The partition number.',
            in: 'query',
            name: 'partition',
            required: true,
            schema: { format: 'int32', maximum: 4, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TweetComplianceStreamResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsCountsAllRoute = createRoute({
  method: 'get',
  path: '/2/tweets/counts/all',
  tags: ['Tweets'],
  summary: 'Full archive search counts',
  description: 'Returns Tweet Counts that match a search query.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all',
  },
  operationId: 'tweetCountsFullArchiveSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(4096)
        .openapi({
          param: {
            description:
              'One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.',
            in: 'query',
            name: 'query',
            required: true,
            schema: {
              example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
              maxLength: 4096,
              minLength: 1,
              type: 'string',
            },
            style: 'form',
          },
          example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID less than (that is, older than) the specified ID.',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      next_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'next_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      granularity: z
        .enum(['minute', 'hour', 'day'])
        .default('hour')
        .exactOptional()
        .openapi({
          param: {
            description: 'The granularity for the search counts results.',
            in: 'query',
            name: 'granularity',
            required: false,
            schema: { default: 'hour', enum: ['minute', 'hour', 'day'], type: 'string' },
            style: 'form',
          },
        }),
      'search_count.fields': SearchCountFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsCountsAllResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsCountsRecentRoute = createRoute({
  method: 'get',
  path: '/2/tweets/counts/recent',
  tags: ['Tweets'],
  summary: 'Recent search counts',
  description: 'Returns Tweet Counts from the last 7 days that match a search query.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent',
  },
  operationId: 'tweetCountsRecentSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(4096)
        .openapi({
          param: {
            description:
              'One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.',
            in: 'query',
            name: 'query',
            required: true,
            schema: {
              example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
              maxLength: 4096,
              minLength: 1,
              type: 'string',
            },
            style: 'form',
          },
          example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID less than (that is, older than) the specified ID.',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      next_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'next_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      granularity: z
        .enum(['minute', 'hour', 'day'])
        .default('hour')
        .exactOptional()
        .openapi({
          param: {
            description: 'The granularity for the search counts results.',
            in: 'query',
            name: 'granularity',
            required: false,
            schema: { default: 'hour', enum: ['minute', 'hour', 'day'], type: 'string' },
            style: 'form',
          },
        }),
      'search_count.fields': SearchCountFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsCountsRecentResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsFirehoseStreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/firehose/stream',
  tags: ['Tweets'],
  summary: 'Firehose stream',
  description: 'Streams 100% of public Tweets.',
  operationId: 'getTweetsFirehoseStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      partition: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(20),
        )
        .openapi({
          param: {
            description: 'The partition number.',
            in: 'query',
            name: 'partition',
            required: true,
            schema: { format: 'int32', maximum: 20, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: StreamingTweetResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsLabelStreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/label/stream',
  tags: ['Compliance'],
  summary: 'Tweets Label stream',
  description: 'Streams 100% of labeling events applied to Tweets',
  operationId: 'getTweetsLabelStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TweetLabelStreamResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsSampleStreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/sample/stream',
  tags: ['Tweets'],
  summary: 'Sample stream',
  description: 'Streams a deterministic 1% of public Tweets.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream',
  },
  operationId: 'sampleStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: StreamingTweetResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsSample10StreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/sample10/stream',
  tags: ['Tweets'],
  summary: 'Sample 10% stream',
  description: 'Streams a deterministic 10% of public Tweets.',
  operationId: 'getTweetsSample10Stream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      partition: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(2),
        )
        .openapi({
          param: {
            description: 'The partition number.',
            in: 'query',
            name: 'partition',
            required: true,
            schema: { format: 'int32', maximum: 2, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsSample10StreamResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsSearchAllRoute = createRoute({
  method: 'get',
  path: '/2/tweets/search/all',
  tags: ['Tweets'],
  summary: 'Full-archive search',
  description: 'Returns Tweets that match a search query.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all',
  },
  operationId: 'tweetsFullarchiveSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(4096)
        .openapi({
          param: {
            description:
              'One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.',
            in: 'query',
            name: 'query',
            required: true,
            schema: {
              example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
              maxLength: 4096,
              minLength: 1,
              type: 'string',
            },
            style: 'form',
          },
          example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID less than (that is, older than) the specified ID.',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(10).max(500),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to be returned by a request.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 10, format: 'int32', maximum: 500, minimum: 10, type: 'integer' },
            style: 'form',
          },
        }),
      next_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'next_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      sort_order: z
        .enum(['recency', 'relevancy'])
        .exactOptional()
        .openapi({
          param: {
            description: 'This order in which to return results.',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { enum: ['recency', 'relevancy'], type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsSearchAllResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsSearchRecentRoute = createRoute({
  method: 'get',
  path: '/2/tweets/search/recent',
  tags: ['Tweets'],
  summary: 'Recent search',
  description: 'Returns Tweets from the last 7 days that match a search query.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent',
  },
  operationId: 'tweetsRecentSearch',
  request: {
    query: z.object({
      query: z
        .string()
        .min(1)
        .max(4096)
        .openapi({
          param: {
            description:
              'One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.',
            in: 'query',
            name: 'query',
            required: true,
            schema: {
              example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
              maxLength: 4096,
              minLength: 1,
              type: 'string',
            },
            style: 'form',
          },
          example: '(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet',
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'Returns results with a Tweet ID less than (that is, older than) the specified ID.',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(10).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of search results to be returned by a request.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 10, format: 'int32', maximum: 100, minimum: 10, type: 'integer' },
            style: 'form',
          },
        }),
      next_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'next_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description:
            "This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      sort_order: z
        .enum(['recency', 'relevancy'])
        .exactOptional()
        .openapi({
          param: {
            description: 'This order in which to return results.',
            in: 'query',
            name: 'sort_order',
            required: false,
            schema: { enum: ['recency', 'relevancy'], type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsSearchRecentResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2TweetsSearchStreamRoute = createRoute({
  method: 'get',
  path: '/2/tweets/search/stream',
  tags: ['Tweets'],
  summary: 'Filtered stream',
  description: "Streams Tweets matching the stream's active rule set.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream',
  },
  operationId: 'searchStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: FilteredStreamingTweetResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsSearchStreamRulesRoute = createRoute({
  method: 'get',
  path: '/2/tweets/search/stream/rules',
  tags: ['Tweets'],
  summary: 'Rules lookup',
  description:
    "Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules',
  },
  operationId: 'getRules',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(RuleIdSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'A comma-separated list of Rule IDs.',
            in: 'query',
            name: 'ids',
            required: false,
            schema: { items: { $ref: '#/components/schemas/RuleId' }, type: 'array' },
            style: 'form',
          },
        }),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .default(1000)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 1000, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: z
        .string()
        .length(16)
        .exactOptional()
        .openapi({
          param: {
            description:
              "This value is populated by passing the 'next_token' returned in a request to paginate through results.",
            in: 'query',
            name: 'pagination_token',
            required: false,
            schema: { maxLength: 16, minLength: 16, type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: RulesLookupResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const post2TweetsSearchStreamRulesRoute = createRoute({
  method: 'post',
  path: '/2/tweets/search/stream/rules',
  tags: ['Tweets'],
  summary: 'Add/Delete rules',
  description:
    "Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules',
  },
  operationId: 'addOrDeleteRules',
  request: {
    query: z.object({
      dry_run: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.',
            in: 'query',
            name: 'dry_run',
            required: false,
            schema: { type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddOrDeleteRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: AddOrDeleteRulesResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2TweetsIdRoute = createRoute({
  method: 'get',
  path: '/2/tweets/{id}',
  tags: ['Tweets'],
  summary: 'Tweet lookup by Tweet ID',
  description: 'Returns a variety of information about the Tweet specified by the requested ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id',
  },
  operationId: 'findTweetById',
  request: {
    params: z.object({
      id: TweetIdSchema.openapi({
        param: {
          description: 'A single Tweet ID.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsIdResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const delete2TweetsIdRoute = createRoute({
  method: 'delete',
  path: '/2/tweets/{id}',
  tags: ['Tweets'],
  summary: 'Tweet delete by Tweet ID',
  description: 'Delete specified Tweet (in the path) by ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id',
  },
  operationId: 'deleteTweetById',
  request: {
    params: z.object({
      id: TweetIdSchema.openapi({
        param: {
          description: 'The ID of the Tweet to be deleted.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TweetDeleteResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'tweet.write', 'users.read'] }, { UserToken: [] }],
})

export const get2TweetsIdLikingUsersRoute = createRoute({
  method: 'get',
  path: '/2/tweets/{id}/liking_users',
  tags: ['Users'],
  summary: 'Returns User objects that have liked the provided Tweet ID',
  description: 'Returns a list of Users that have liked the provided Tweet ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users',
  },
  operationId: 'tweetsIdLikingUsers',
  request: {
    params: z.object({
      id: TweetIdSchema.openapi({
        param: {
          description: 'A single Tweet ID.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsIdLikingUsersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['like.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2TweetsIdQuoteTweetsRoute = createRoute({
  method: 'get',
  path: '/2/tweets/{id}/quote_tweets',
  tags: ['Tweets'],
  summary: 'Retrieve Tweets that quote a Tweet.',
  description:
    'Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets',
  },
  operationId: 'findTweetsThatQuoteATweet',
  request: {
    params: z.object({
      id: TweetIdSchema.openapi({
        param: {
          description: 'A single Tweet ID.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(10).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results to be returned.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 10, format: 'int32', maximum: 100, minimum: 10, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      exclude: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.enum(['replies', 'retweets']))
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            explode: false,
            in: 'query',
            name: 'exclude',
            required: false,
            schema: {
              example: ['replies', 'retweets'],
              items: { enum: ['replies', 'retweets'], type: 'string' },
              minItems: 1,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['replies', 'retweets'],
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsIdQuoteTweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2TweetsIdRetweetedByRoute = createRoute({
  method: 'get',
  path: '/2/tweets/{id}/retweeted_by',
  tags: ['Users'],
  summary: 'Returns User objects that have retweeted the provided Tweet ID',
  description: 'Returns a list of Users that have retweeted the provided Tweet ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by',
  },
  operationId: 'tweetsIdRetweetingUsers',
  request: {
    params: z.object({
      id: TweetIdSchema.openapi({
        param: {
          description: 'A single Tweet ID.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2TweetsIdRetweetedByResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const put2TweetsTweetIdHiddenRoute = createRoute({
  method: 'put',
  path: '/2/tweets/{tweet_id}/hidden',
  tags: ['Tweets'],
  summary: 'Hide replies',
  description: 'Hides or unhides a reply to an owned conversation.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden',
  },
  operationId: 'hideReplyById',
  request: {
    params: z.object({
      tweet_id: TweetIdSchema.openapi({
        param: {
          description: 'The ID of the reply that you want to hide or unhide.',
          in: 'path',
          name: 'tweet_id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: TweetHideRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: TweetHideResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { OAuth2UserToken: ['tweet.moderate.write', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersRoute = createRoute({
  method: 'get',
  path: '/2/users',
  tags: ['Users'],
  summary: 'User lookup by IDs',
  description: 'This endpoint returns information about Users. Specify Users by their ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users',
  },
  operationId: 'findUsersById',
  request: {
    query: z.object({
      ids: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(UserIdSchema).min(1).max(100),
        )
        .openapi({
          param: {
            description: 'A list of User IDs, comma-separated. You can specify up to 100 IDs.',
            example: '2244994945,6253282,12',
            explode: false,
            in: 'query',
            name: 'ids',
            required: true,
            schema: {
              items: { $ref: '#/components/schemas/UserId' },
              maxItems: 100,
              minItems: 1,
              type: 'array',
            },
            style: 'form',
          },
        }),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersByRoute = createRoute({
  method: 'get',
  path: '/2/users/by',
  tags: ['Users'],
  summary: 'User lookup by usernames',
  description: 'This endpoint returns information about Users. Specify Users by their username.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by',
  },
  operationId: 'findUsersByUsername',
  request: {
    query: z.object({
      usernames: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(
              z
                .string()
                .regex(/^[A-Za-z0-9_]{1,15}$/)
                .openapi({ description: 'The Twitter handle (screen name) of this User.' }),
            )
            .min(1)
            .max(100),
        )
        .openapi({
          param: {
            description: 'A list of usernames, comma-separated.',
            explode: false,
            in: 'query',
            name: 'usernames',
            required: true,
            schema: {
              example: 'TwitterDev,TwitterAPI',
              items: {
                description: 'The Twitter handle (screen name) of this User.',
                pattern: '^[A-Za-z0-9_]{1,15}$',
                type: 'string',
              },
              maxItems: 100,
              minItems: 1,
              type: 'array',
            },
            style: 'form',
          },
          example: 'TwitterDev,TwitterAPI',
        }),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersByResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersByUsernameUsernameRoute = createRoute({
  method: 'get',
  path: '/2/users/by/username/{username}',
  tags: ['Users'],
  summary: 'User lookup by username',
  description: 'This endpoint returns information about a User. Specify User by username.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username',
  },
  operationId: 'findUserByUsername',
  request: {
    params: z.object({
      username: z
        .string()
        .regex(/^[A-Za-z0-9_]{1,15}$/)
        .openapi({
          param: {
            description: 'A username.',
            example: 'TwitterDev',
            in: 'path',
            name: 'username',
            required: true,
            schema: { pattern: '^[A-Za-z0-9_]{1,15}$', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersByUsernameUsernameResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersComplianceStreamRoute = createRoute({
  method: 'get',
  path: '/2/users/compliance/stream',
  tags: ['Compliance'],
  summary: 'Users Compliance stream',
  description: 'Streams 100% of compliance data for Users',
  operationId: 'getUsersComplianceStream',
  request: {
    query: z.object({
      backfill_minutes: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(0).max(5),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of minutes of backfill requested.',
            in: 'query',
            name: 'backfill_minutes',
            required: false,
            schema: { format: 'int32', maximum: 5, minimum: 0, type: 'integer' },
            style: 'form',
          },
        }),
      partition: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(4),
        )
        .openapi({
          param: {
            description: 'The partition number.',
            in: 'query',
            name: 'partition',
            required: true,
            schema: { format: 'int32', maximum: 4, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UserComplianceStreamResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ BearerToken: [] }],
})

export const get2UsersMeRoute = createRoute({
  method: 'get',
  path: '/2/users/me',
  tags: ['Users'],
  summary: 'User lookup me',
  description: 'This endpoint returns information about the requesting User.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me',
  },
  operationId: 'findMyUser',
  request: {
    query: z.object({
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersMeResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}',
  tags: ['Users'],
  summary: 'User lookup by ID',
  description: 'This endpoint returns information about a User. Specify User by ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id',
  },
  operationId: 'findUserById',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersIdBlockingRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/blocking',
  tags: ['Users'],
  summary: 'Returns User objects that are blocked by provided User ID',
  description: 'Returns a list of Users that are blocked by the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking',
  },
  operationId: 'usersIdBlocking',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to return results.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdBlockingResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['block.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2UsersIdBlockingRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/blocking',
  tags: ['Users'],
  summary: 'Block User by User ID',
  description:
    'Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking',
  },
  operationId: 'usersIdBlock',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to block the target User.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: BlockUserRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: BlockUserMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['block.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdBookmarksRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Bookmarks by User',
  description: 'Returns Tweet objects that have been bookmarked by the requesting User',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks',
  },
  operationId: 'getUsersIdBookmarks',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to return results.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdBookmarksResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['bookmark.read', 'tweet.read', 'users.read'] }],
})

export const post2UsersIdBookmarksRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/bookmarks',
  tags: ['Bookmarks'],
  summary: 'Add Tweet to Bookmarks',
  description: "Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks',
  },
  operationId: 'postUsersIdBookmarks',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to add bookmarks.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: BookmarkAddRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: BookmarkMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['bookmark.write', 'tweet.read', 'users.read'] }],
})

export const delete2UsersIdBookmarksTweetIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{id}/bookmarks/{tweet_id}',
  tags: ['Bookmarks'],
  summary: 'Remove a bookmarked Tweet',
  description: "Removes a Tweet from the requesting User's bookmarked Tweets.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id',
  },
  operationId: 'usersIdBookmarksDelete',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User whose bookmark is to be removed.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      tweet_id: TweetIdSchema.openapi({
        param: {
          description: 'The ID of the Tweet that the source User is removing from bookmarks.',
          in: 'path',
          name: 'tweet_id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: BookmarkMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['bookmark.write', 'tweet.read', 'users.read'] }],
})

export const get2UsersIdFollowedListsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/followed_lists',
  tags: ['Lists'],
  summary: "Get User's Followed Lists",
  description: "Returns a User's followed Lists.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists',
  },
  operationId: 'userFollowedLists',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'list.fields': ListFieldsParameterParamsSchema,
      expansions: ListExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdFollowedListsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const post2UsersIdFollowedListsRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/followed_lists',
  tags: ['Lists'],
  summary: 'Follow a List',
  description: 'Causes a User to follow a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists',
  },
  operationId: 'listUserFollow',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User that will follow the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: ListFollowedRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListFollowedResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersIdFollowedListsListIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{id}/followed_lists/{list_id}',
  tags: ['Lists'],
  summary: 'Unfollow a List',
  description: 'Causes a User to unfollow a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id',
  },
  operationId: 'listUserUnfollow',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User that will unfollow the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      list_id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List to unfollow.',
          in: 'path',
          name: 'list_id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListFollowedResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdFollowersRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/followers',
  tags: ['Users'],
  summary: 'Followers by User ID',
  description: 'Returns a list of Users who are followers of the specified User ID.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers',
  },
  operationId: 'usersIdFollowers',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdFollowersResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['follows.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersIdFollowingRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/following',
  tags: ['Users'],
  summary: 'Following by User ID',
  description: 'Returns a list of Users that are being followed by the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following',
  },
  operationId: 'usersIdFollowing',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken32Schema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken32' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdFollowingResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['follows.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const post2UsersIdFollowingRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/following',
  tags: ['Users'],
  summary: 'Follow User',
  description:
    'Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following',
  },
  operationId: 'usersIdFollow',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to follow the target User.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UsersFollowingCreateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersFollowingCreateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['follows.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdLikedTweetsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/liked_tweets',
  tags: ['Tweets'],
  summary: 'Returns Tweet objects liked by the provided User ID',
  description: 'Returns a list of Tweets liked by the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets',
  },
  operationId: 'usersIdLikedTweets',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(5).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 100, minimum: 5, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdLikedTweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['like.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const post2UsersIdLikesRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/likes',
  tags: ['Tweets'],
  summary: 'Causes the User (in the path) to like the specified Tweet',
  description:
    'Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes',
  },
  operationId: 'usersIdLike',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to like the Tweet.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UsersLikesCreateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersLikesCreateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['like.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersIdLikesTweetIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{id}/likes/{tweet_id}',
  tags: ['Tweets'],
  summary: 'Causes the User (in the path) to unlike the specified Tweet',
  description:
    'Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id',
  },
  operationId: 'usersIdUnlike',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to unlike the Tweet.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      tweet_id: TweetIdSchema.openapi({
        param: {
          description: 'The ID of the Tweet that the User is requesting to unlike.',
          in: 'path',
          name: 'tweet_id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersLikesDeleteResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['like.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdListMembershipsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/list_memberships',
  tags: ['Lists'],
  summary: "Get a User's List Memberships",
  description: "Get a User's List Memberships.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships',
  },
  operationId: 'getUserListMemberships',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'list.fields': ListFieldsParameterParamsSchema,
      expansions: ListExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdListMembershipsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersIdMentionsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/mentions',
  tags: ['Tweets'],
  summary: 'User mention timeline by User ID',
  description: 'Returns Tweet objects that mention username associated to the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions',
  },
  operationId: 'usersIdMentions',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.',
          example: '1346889436626259968',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(5).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 100, minimum: 5, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdMentionsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersIdMutingRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/muting',
  tags: ['Users'],
  summary: 'Returns User objects that are muted by the provided User ID',
  description: 'Returns a list of Users that are muted by the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting',
  },
  operationId: 'usersIdMuting',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to return results.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 1000, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'user.fields': UserFieldsParameterParamsSchema,
      expansions: UserExpansionsParameterParamsSchema,
      'tweet.fields': TweetFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdMutingResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['mute.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2UsersIdMutingRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/muting',
  tags: ['Users'],
  summary: 'Mute User by User ID.',
  description:
    'Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting',
  },
  operationId: 'usersIdMute',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to mute the target User.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: MuteUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: MuteUserMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['mute.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdOwnedListsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/owned_lists',
  tags: ['Lists'],
  summary: "Get a User's Owned Lists.",
  description: "Get a User's Owned Lists.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists',
  },
  operationId: 'listUserOwnedLists',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { default: 100, format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationTokenLongSchema.openapi({
        param: {
          description: "This parameter is used to get a specified 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationTokenLong' },
          style: 'form',
        },
      }).exactOptional(),
      'list.fields': ListFieldsParameterParamsSchema,
      expansions: ListExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdOwnedListsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const get2UsersIdPinnedListsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/pinned_lists',
  tags: ['Lists'],
  summary: "Get a User's Pinned Lists",
  description: "Get a User's Pinned Lists.",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists',
  },
  operationId: 'listUserPinnedLists',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to return results.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      'list.fields': ListFieldsParameterParamsSchema,
      expansions: ListExpansionsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdPinnedListsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.read', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2UsersIdPinnedListsRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/pinned_lists',
  tags: ['Lists'],
  summary: 'Pin a List',
  description: 'Causes a User to pin a List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists',
  },
  operationId: 'listUserPin',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User that will pin the List.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: ListPinnedRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListPinnedResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersIdPinnedListsListIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{id}/pinned_lists/{list_id}',
  tags: ['Lists'],
  summary: 'Unpin a List',
  description: 'Causes a User to remove a pinned List.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id',
  },
  operationId: 'listUserUnpin',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description: 'The ID of the authenticated source User for whom to return results.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      list_id: ListIdSchema.openapi({
        param: {
          description: 'The ID of the List to unpin.',
          in: 'path',
          name: 'list_id',
          required: true,
          schema: { $ref: '#/components/schemas/ListId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: ListUnpinResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['list.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const post2UsersIdRetweetsRoute = createRoute({
  method: 'post',
  path: '/2/users/{id}/retweets',
  tags: ['Tweets'],
  summary: 'Causes the User (in the path) to retweet the specified Tweet.',
  description:
    'Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets',
  },
  operationId: 'usersIdRetweets',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to retweet the Tweet.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    body: { content: { 'application/json': { schema: UsersRetweetsCreateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersRetweetsCreateResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'tweet.write', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersIdRetweetsSourceTweetIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{id}/retweets/{source_tweet_id}',
  tags: ['Tweets'],
  summary: 'Causes the User (in the path) to unretweet the specified Tweet',
  description:
    'Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id',
  },
  operationId: 'usersIdUnretweets',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to retweet the Tweet.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      source_tweet_id: TweetIdSchema.openapi({
        param: {
          description: 'The ID of the Tweet that the User is requesting to unretweet.',
          in: 'path',
          name: 'source_tweet_id',
          required: true,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersRetweetsDeleteResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'tweet.write', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdTimelinesReverseChronologicalRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/timelines/reverse_chronological',
  tags: ['Tweets'],
  summary: 'User home timeline by User ID',
  description: "Returns Tweet objects that appears in the provided User ID's home timeline",
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-reverse-chronological',
  },
  operationId: 'usersIdTimeline',
  request: {
    params: z.object({
      id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.',
          example: '791775337160081409',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.',
          example: '1346889436626259968',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 100, minimum: 1, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      exclude: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.enum(['replies', 'retweets'])).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            explode: false,
            in: 'query',
            name: 'exclude',
            required: false,
            schema: {
              example: ['replies', 'retweets'],
              items: { enum: ['replies', 'retweets'], type: 'string' },
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['replies', 'retweets'],
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: {
        'application/json': { schema: Get2UsersIdTimelinesReverseChronologicalResponseSchema },
      },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const get2UsersIdTweetsRoute = createRoute({
  method: 'get',
  path: '/2/users/{id}/tweets',
  tags: ['Tweets'],
  summary: 'User Tweets timeline by User ID',
  description: 'Returns a list of Tweets authored by the provided User ID',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets',
  },
  operationId: 'usersIdTweets',
  request: {
    params: z.object({
      id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User to lookup.',
          example: '2244994945',
          in: 'path',
          name: 'id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
    query: z.object({
      since_id: TweetIdSchema.openapi({
        param: {
          description:
            'The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.',
          example: '791775337160081409',
          in: 'query',
          name: 'since_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      until_id: TweetIdSchema.openapi({
        param: {
          description:
            'The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.',
          example: '1346889436626259968',
          in: 'query',
          name: 'until_id',
          required: false,
          schema: { $ref: '#/components/schemas/TweetId' },
          style: 'form',
        },
      }).exactOptional(),
      max_results: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(5).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of results.',
            in: 'query',
            name: 'max_results',
            required: false,
            schema: { format: 'int32', maximum: 100, minimum: 5, type: 'integer' },
            style: 'form',
          },
        }),
      pagination_token: PaginationToken36Schema.openapi({
        param: {
          description: "This parameter is used to get the next 'page' of results.",
          in: 'query',
          name: 'pagination_token',
          required: false,
          schema: { $ref: '#/components/schemas/PaginationToken36' },
          style: 'form',
        },
      }).exactOptional(),
      exclude: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z
            .array(z.enum(['replies', 'retweets']))
            .min(1)
            .superRefine((items, ctx) => {
              const seen = new Map()
              for (const [i, val] of items.entries()) {
                const key = JSON.stringify(val)
                if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
                else seen.set(key, i)
              }
            }),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "The set of entities to exclude (e.g. 'replies' or 'retweets').",
            explode: false,
            in: 'query',
            name: 'exclude',
            required: false,
            schema: {
              example: ['replies', 'retweets'],
              items: { enum: ['replies', 'retweets'], type: 'string' },
              minItems: 1,
              type: 'array',
              uniqueItems: true,
            },
            style: 'form',
          },
          example: ['replies', 'retweets'],
        }),
      start_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.',
            example: '2021-02-01T18:40:40.000Z',
            in: 'query',
            name: 'start_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      end_time: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.',
            example: '2021-02-14T18:40:40.000Z',
            in: 'query',
            name: 'end_time',
            required: false,
            schema: { format: 'date-time', type: 'string' },
            style: 'form',
          },
        }),
      'tweet.fields': TweetFieldsParameterParamsSchema,
      expansions: TweetExpansionsParameterParamsSchema,
      'media.fields': MediaFieldsParameterParamsSchema,
      'poll.fields': PollFieldsParameterParamsSchema,
      'user.fields': UserFieldsParameterParamsSchema,
      'place.fields': PlaceFieldsParameterParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: Get2UsersIdTweetsResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [
    { BearerToken: [] },
    { OAuth2UserToken: ['tweet.read', 'users.read'] },
    { UserToken: [] },
  ],
})

export const delete2UsersSourceUserIdBlockingTargetUserIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{source_user_id}/blocking/{target_user_id}',
  tags: ['Users'],
  summary: 'Unblock User by User ID',
  description:
    'Causes the source User to unblock the target User. The source User must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking',
  },
  operationId: 'usersIdUnblock',
  request: {
    params: z.object({
      source_user_id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to unblock the target User.',
          in: 'path',
          name: 'source_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      target_user_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User that the source User is requesting to unblock.',
          in: 'path',
          name: 'target_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: BlockUserMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['block.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersSourceUserIdFollowingTargetUserIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{source_user_id}/following/{target_user_id}',
  tags: ['Users'],
  summary: 'Unfollow User',
  description:
    'Causes the source User to unfollow the target User. The source User must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following',
  },
  operationId: 'usersIdUnfollow',
  request: {
    params: z.object({
      source_user_id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to unfollow the target User.',
          in: 'path',
          name: 'source_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      target_user_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User that the source User is requesting to unfollow.',
          in: 'path',
          name: 'target_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: UsersFollowingDeleteResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['follows.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})

export const delete2UsersSourceUserIdMutingTargetUserIdRoute = createRoute({
  method: 'delete',
  path: '/2/users/{source_user_id}/muting/{target_user_id}',
  tags: ['Users'],
  summary: 'Unmute User by User ID',
  description:
    'Causes the source User to unmute the target User. The source User must match the User context authorizing the request',
  externalDocs: {
    url: 'https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting',
  },
  operationId: 'usersIdUnmute',
  request: {
    params: z.object({
      source_user_id: UserIdMatchesAuthenticatedUserSchema.openapi({
        param: {
          description:
            'The ID of the authenticated source User that is requesting to unmute the target User.',
          in: 'path',
          name: 'source_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserIdMatchesAuthenticatedUser' },
          style: 'simple',
        },
      }),
      target_user_id: UserIdSchema.openapi({
        param: {
          description: 'The ID of the User that the source User is requesting to unmute.',
          in: 'path',
          name: 'target_user_id',
          required: true,
          schema: { $ref: '#/components/schemas/UserId' },
          style: 'simple',
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request has succeeded.',
      content: { 'application/json': { schema: MuteUserMutationResponseSchema } },
    },
    default: {
      description: 'The request has failed.',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/problem+json': { schema: ProblemSchema },
      },
    },
  },
  security: [{ OAuth2UserToken: ['mute.write', 'tweet.read', 'users.read'] }, { UserToken: [] }],
})
