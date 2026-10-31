import { createRoute, z } from '@hono/zod-openapi'

const Blobstore2InfoSchema = z
  .object({
    blobGeneration: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    blobId: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    downloadReadHandle: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    readToken: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    uploadMetadataContainer: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('Blobstore2Info')

const ObjectIdSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    generation: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    objectName: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('ObjectId')

const CompositeMediaSchema = z
  .object({
    blobRef: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    blobstore2Info: Blobstore2InfoSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    cosmoBinaryReference: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    crc32cHash: z
      .uint32()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    inline: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    length: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    md5Hash: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    objectId: ObjectIdSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    referenceType: z
      .enum(['PATH', 'BLOB_REF', 'INLINE', 'BIGSTORE_REF', 'COSMO_BINARY_REFERENCE'])
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    sha1Hash: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('CompositeMedia')

const ContentTypeInfoSchema = z
  .object({
    bestGuess: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    fromBytes: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    fromFileName: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    fromHeader: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    fromUrlPath: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('ContentTypeInfo')

const DiffChecksumsResponseSchema = z
  .object({
    checksumsLocation: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    chunkSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    objectLocation: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    objectSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DiffChecksumsResponse')

const DiffDownloadResponseSchema = z
  .object({
    objectLocation: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DiffDownloadResponse')

const DiffUploadRequestSchema = z
  .object({
    checksumsInfo: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    objectInfo: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DiffUploadRequest')

const DiffUploadResponseSchema = z
  .object({
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    originalObject: CompositeMediaSchema.exactOptional().openapi({
      description: '# gdata.* are outside protos with mising documentation',
    }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DiffUploadResponse')

const DiffVersionResponseSchema = z
  .object({
    objectSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DiffVersionResponse')

const DownloadParametersSchema = z
  .object({
    allowGzipCompression: z
      .boolean()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
    ignoreRange: z
      .boolean()
      .exactOptional()
      .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
  })
  .openapi({ description: '# gdata.* are outside protos with mising documentation', required: [] })
  .openapi('DownloadParameters')

type MediaType = {
  algorithm?: string
  bigstoreObjectRef?: string
  blobRef?: string
  blobstore2Info?: z.infer<typeof Blobstore2InfoSchema>
  compositeMedia?: z.infer<typeof CompositeMediaSchema>[]
  contentType?: string
  contentTypeInfo?: z.infer<typeof ContentTypeInfoSchema>
  cosmoBinaryReference?: string
  crc32cHash?: number
  diffChecksumsResponse?: z.infer<typeof DiffChecksumsResponseSchema>
  diffDownloadResponse?: z.infer<typeof DiffDownloadResponseSchema>
  diffUploadRequest?: z.infer<typeof DiffUploadRequestSchema>
  diffUploadResponse?: z.infer<typeof DiffUploadResponseSchema>
  diffVersionResponse?: z.infer<typeof DiffVersionResponseSchema>
  downloadParameters?: z.infer<typeof DownloadParametersSchema>
  filename?: string
  hash?: string
  hashVerified?: boolean
  inline?: string
  isPotentialRetry?: boolean
  length?: string
  md5Hash?: string
  mediaId?: string
  objectId?: z.infer<typeof ObjectIdSchema>
  path?: string
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'GET_MEDIA'
    | 'COMPOSITE_MEDIA'
    | 'BIGSTORE_REF'
    | 'DIFF_VERSION_RESPONSE'
    | 'DIFF_CHECKSUMS_RESPONSE'
    | 'DIFF_DOWNLOAD_RESPONSE'
    | 'DIFF_UPLOAD_REQUEST'
    | 'DIFF_UPLOAD_RESPONSE'
    | 'COSMO_BINARY_REFERENCE'
    | 'ARBITRARY_BYTES'
  sha1Hash?: string
  sha256Hash?: string
  timestamp?: string
  token?: string
}

const ActorSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name to display for the actor. If not provided, it is inferred from credentials supplied during case creation. When an email is provided, a display name must also be provided. This will be obfuscated if the user is a Google Support agent.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the actor. If not provided, it is inferred from credentials supplied during case creation. If the authenticated principal does not have an email address, one must be provided. When a name is provided, an email must also be provided. This will be obfuscated if the user is a Google Support agent.',
      }),
    googleSupport: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Whether the actor is a Google support actor.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An object containing information about the effective user and authenticated principal responsible for an action.',
    required: [],
  })
  .openapi('Actor')

const AttachmentSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the attachment was created.',
        readOnly: true,
      }),
    creator: ActorSchema.exactOptional().openapi({
      description:
        'Output only. The user who uploaded the attachment. Note, the name and email will be obfuscated if the attachment was uploaded by Google support.',
      readOnly: true,
    }),
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filename of the attachment (e.g. `"graph.jpg"`).' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The MIME type of the attachment (e.g. text/plain).',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The resource name of the attachment.',
        readOnly: true,
      }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The size of the attachment in bytes.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents a file attached to a support case.', required: [] })
  .openapi('Attachment')

const CaseClassificationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the classification.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID for a classification. Must be specified for case creation. To retrieve valid classification IDs for case creation, use `caseClassifications.search`.',
      }),
  })
  .openapi({ description: 'A classification object with a product type and value.', required: [] })
  .openapi('CaseClassification')

const CaseSchema = z
  .object({
    classification: CaseClassificationSchema.exactOptional().openapi({
      description: 'The issue classification applicable to this case.',
    }),
    contactEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.",
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this case was created.', readOnly: true }),
    creator: ActorSchema.exactOptional().openapi({
      description:
        'The user who created the case. Note: The name and email will be obfuscated if the case was created by Google Support.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A broad description of the issue.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The short summary of the issue reported in this case.' }),
    escalated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the case is currently escalated.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours',
      }),
    name: z.string().exactOptional().openapi({ description: 'The resource name for the case.' }),
    priority: z
      .enum(['PRIORITY_UNSPECIFIED', 'P0', 'P1', 'P2', 'P3', 'P4'])
      .exactOptional()
      .openapi({ description: 'The priority of this case. If this is set, do not set severity.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'S0', 'S1', 'S2', 'S3', 'S4'])
      .exactOptional()
      .openapi({ description: 'REMOVED. The severity of this case. Use priority instead.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'NEW',
        'IN_PROGRESS_GOOGLE_SUPPORT',
        'ACTION_REQUIRED',
        'SOLUTION_PROVIDED',
        'CLOSED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The current status of the support case.',
        readOnly: true,
      }),
    subscriberEmailAddresses: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The email addresses to receive updates on this case.' }),
    testCase: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this case was created for internal API testing and should not be acted on by the support team.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time this case was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A support case.', required: [] })
  .openapi('Case')

const CloseCaseRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for the CloseCase endpoint.' })
  .openapi('CloseCaseRequest')

const CommentSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full comment body. Maximum of 12800 characters. This can contain rich text syntax.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when this comment was created.',
        readOnly: true,
      }),
    creator: ActorSchema.exactOptional().openapi({
      description: 'Output only. The user or Google Support agent created this comment.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The resource name for the comment.', readOnly: true }),
    plainTextBody: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. DEPRECATED. An automatically generated plain text version of body with all rich text syntax stripped.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A comment associated with a support case.', required: [] })
  .openapi('Comment')

const CreateAttachmentRequestSchema = z
  .object({
    attachment: AttachmentSchema.exactOptional().openapi({
      description: 'Required. The attachment to be created.',
    }),
  })
  .openapi({ description: 'The request message for the CreateAttachment endpoint.', required: [] })
  .openapi('CreateAttachmentRequest')

const EscalationSchema = z
  .object({
    justification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A free text description to accompany the `reason` field above. Provides additional context on why the case is being escalated.',
      }),
    reason: z
      .enum(['REASON_UNSPECIFIED', 'RESOLUTION_TIME', 'TECHNICAL_EXPERTISE', 'BUSINESS_IMPACT'])
      .exactOptional()
      .openapi({ description: 'Required. The reason why the Case is being escalated.' }),
  })
  .openapi({ description: 'An escalation of a support case.', required: [] })
  .openapi('Escalation')

const EscalateCaseRequestSchema = z
  .object({
    escalation: EscalationSchema.exactOptional().openapi({
      description: 'The escalation object to be sent with the escalation request.',
    }),
  })
  .openapi({ description: 'The request message for the EscalateCase endpoint.', required: [] })
  .openapi('EscalateCaseRequest')

const ListAttachmentsResponseSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The list of attachments associated with the given case.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `cases.attachments.list` requests. If unspecified, there are no more results to retrieve.',
      }),
  })
  .openapi({ description: 'The response message for the ListAttachments endpoint.', required: [] })
  .openapi('ListAttachmentsResponse')

const ListCasesResponseSchema = z
  .object({
    cases: z
      .array(CaseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of cases associated with the cloud resource, after any filters have been applied.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCasesRequest` message that is issued. If unspecified, there are no more results to retrieve.',
      }),
  })
  .openapi({ description: 'The response message for the ListCases endpoint.', required: [] })
  .openapi('ListCasesResponse')

const ListCommentsResponseSchema = z
  .object({
    comments: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({ description: 'The list of Comments associated with the given Case.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCommentsRequest` message that is issued. If unspecified, there are no more results to retrieve.',
      }),
  })
  .openapi({ description: 'The response message for the ListComments endpoint.', required: [] })
  .openapi('ListCommentsResponse')

const MediaSchema: z.ZodType<MediaType> = z
  .lazy(() =>
    z
      .object({
        algorithm: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        bigstoreObjectRef: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        blobRef: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        blobstore2Info: Blobstore2InfoSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        compositeMedia: z
          .array(CompositeMediaSchema)
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        contentType: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        contentTypeInfo: ContentTypeInfoSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        cosmoBinaryReference: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        crc32cHash: z
          .uint32()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        diffChecksumsResponse: DiffChecksumsResponseSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        diffDownloadResponse: DiffDownloadResponseSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        diffUploadRequest: DiffUploadRequestSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        diffUploadResponse: DiffUploadResponseSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        diffVersionResponse: DiffVersionResponseSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        downloadParameters: DownloadParametersSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        filename: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        hash: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        hashVerified: z
          .boolean()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        inline: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        isPotentialRetry: z
          .boolean()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        length: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        md5Hash: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        mediaId: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        objectId: ObjectIdSchema.exactOptional().openapi({
          description: '# gdata.* are outside protos with mising documentation',
        }),
        path: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        referenceType: z
          .enum([
            'PATH',
            'BLOB_REF',
            'INLINE',
            'GET_MEDIA',
            'COMPOSITE_MEDIA',
            'BIGSTORE_REF',
            'DIFF_VERSION_RESPONSE',
            'DIFF_CHECKSUMS_RESPONSE',
            'DIFF_DOWNLOAD_RESPONSE',
            'DIFF_UPLOAD_REQUEST',
            'DIFF_UPLOAD_RESPONSE',
            'COSMO_BINARY_REFERENCE',
            'ARBITRARY_BYTES',
          ])
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        sha1Hash: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        sha256Hash: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        timestamp: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
        token: z
          .string()
          .exactOptional()
          .openapi({ description: '# gdata.* are outside protos with mising documentation' }),
      })
      .openapi({
        description: '# gdata.* are outside protos with mising documentation',
        required: [],
      }),
  )
  .openapi('Media')

const SearchCaseClassificationsResponseSchema = z
  .object({
    caseClassifications: z
      .array(CaseClassificationSchema)
      .exactOptional()
      .openapi({ description: 'The classifications retrieved.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseClassificationsRequest` message that is issued. If unspecified, there are no more results to retrieve.',
      }),
  })
  .openapi({
    description: 'The response message for SearchCaseClassifications endpoint.',
    required: [],
  })
  .openapi('SearchCaseClassificationsResponse')

const SearchCasesResponseSchema = z
  .object({
    cases: z
      .array(CaseSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of Case associated with the cloud resource, after any filters have been applied.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseRequest` message that is issued. If unspecified, there are no more results to retrieve.',
      }),
  })
  .openapi({ description: 'The response message for the SearchCases endpoint.', required: [] })
  .openapi('SearchCasesResponse')

const WorkflowOperationMetadataSchema = z
  .object({
    namespace: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The namespace that the job was scheduled in. Must be included in the workflow metadata so the workflow status can be retrieved.',
      }),
    operationAction: z
      .enum([
        'OPERATION_ACTION_UNSPECIFIED',
        'CREATE_SUPPORT_ACCOUNT',
        'UPDATE_SUPPORT_ACCOUNT',
        'PURCHASE_SUPPORT_ACCOUNT',
      ])
      .exactOptional()
      .openapi({ description: 'The type of action the operation is classified as.' }),
    workflowOperationType: z
      .enum(['UNKNOWN_OPERATION_TYPE', 'WORKFLOWS_V1', 'WORKFLOWS_V2'])
      .exactOptional()
      .openapi({ description: 'Which version of the workflow service this operation came from.' }),
  })
  .openapi({
    description: 'Metadata about the operation. Used to lookup the current status.',
    required: [],
  })
  .openapi('WorkflowOperationMetadata')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV2betaCaseClassificationsSearchRoute = createRoute({
  method: 'get',
  path: '/v2beta/caseClassifications:search',
  tags: ['caseClassifications'],
  description:
    'Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".',
  operationId: 'cloudsupport.caseClassifications.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
            description: 'The maximum number of cases fetched with each request.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying the page of results to return. If unspecified, the first page is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression written in the Cloud filter language. If non-empty, then only cases whose fields match the filter are returned. If empty, then no messages are filtered out.',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchCaseClassificationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaCasesSearchRoute = createRoute({
  method: 'get',
  path: '/v2beta/cases:search',
  tags: ['cases'],
  description: 'Search cases using the specified query.',
  operationId: 'cloudsupport.cases.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'The maximum number of cases fetched with each request. The default page size is 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying the page of results to return. If unspecified, the first page is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression written in filter language. A query uses the following fields with the operators equals (`=`) and `AND`: - `organization`: An organization name in the form `organizations/`. - `project`: A project name in the form `projects/`. - `state`: The accepted values are `OPEN` or `CLOSED`. - `priority`: The accepted values are `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - [DEPRECATED] `severity`: The accepted values are `S0`, `S1`, `S2`, `S3`, or `S4`. - `creator.email`: The email address of the case creator. - `billingAccount`: A billing account in the form `billingAccounts/` You must specify eitehr `organization` or `project`. To search across `displayName`, `description`, and comments, use a global restriction with no keyword or operator. For example, `"my search"`. To search only cases updated after a certain date, use `update_time` retricted with that particular date, time, and timezone in ISO datetime format. For example, `update_time>"2020-01-01T00:00:00-05:00"`. `update_time` only supports the greater than operator (`>`). Examples: - `organization="organizations/123456789"` - `project="projects/my-project-id"` - `project="projects/123456789"` - `billing_account="billingAccounts/123456-A0B0C0-CUZ789"` - `organization="organizations/123456789" AND state=CLOSED` - `project="projects/my-project-id" AND creator.email="tester@example.com"` - `project="projects/my-project-id" AND (priority=P0 OR priority=P1)`',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchCasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaNameRoute = createRoute({
  method: 'get',
  path: '/v2beta/{name}',
  tags: ['cases'],
  description: 'Retrieve the specified case.',
  operationId: 'cloudsupport.cases.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The fully qualified name of a case to be retrieved.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV2betaNameRoute = createRoute({
  method: 'patch',
  path: '/v2beta/{name}',
  tags: ['cases'],
  description: 'Update the specified case. Only a subset of fields can be updated.',
  operationId: 'cloudsupport.cases.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of attributes of the case object that should be updated as part of this request. Supported values are severity, display_name, and subscriber_email_addresses. If no fields are specified, all supported fields are updated. WARNING: If you do not provide a field mask, then you may accidentally clear some fields. For example, if you leave field mask empty and do not provide a value for subscriber_email_addresses, then subscriber_email_addresses is updated to empty.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name for the case.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CaseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2betaNameCloseRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:close',
  tags: ['cases'],
  description: 'Close the specified case.',
  operationId: 'cloudsupport.cases.close',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The fully qualified name of the case resource to be closed.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CloseCaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaNameDownloadRoute = createRoute({
  method: 'get',
  path: '/v2beta/{name}:download',
  tags: ['media'],
  description:
    'Download a file attachment on a case. Note: HTTP requests must append "?alt=media" to the URL.',
  operationId: 'cloudsupport.media.download',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource name of the attachment to be downloaded.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2betaNameEscalateRoute = createRoute({
  method: 'post',
  path: '/v2beta/{name}:escalate',
  tags: ['cases'],
  description:
    "Escalate a case. Escalating a case will initiate the Cloud Support escalation management process. This operation is only available to certain Customer Care tiers. Go to https://cloud.google.com/support and look for 'Technical support escalations' in the feature list to find out which tiers are able to perform escalations.",
  operationId: 'cloudsupport.cases.escalate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The fully qualified name of the Case resource to be escalated.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EscalateCaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaParentAttachmentsRoute = createRoute({
  method: 'get',
  path: '/v2beta/{parent}/attachments',
  tags: ['cases'],
  description: 'Retrieve all attachments associated with a support case.',
  operationId: 'cloudsupport.cases.attachments.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'The maximum number of attachments fetched with each request. If not provided, the default is 10. The maximum page size that will be returned is 100.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying the page of results to return. If unspecified, the first page is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of Case object for which attachments should be listed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListAttachmentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2betaParentAttachmentsRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/attachments',
  tags: ['media'],
  description:
    'Create a file attachment on a case or Cloud resource. The attachment object must have the following fields set: filename.',
  operationId: 'cloudsupport.media.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the case (or case parent) to which the attachment should be attached.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: CreateAttachmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AttachmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaParentCasesRoute = createRoute({
  method: 'get',
  path: '/v2beta/{parent}/cases',
  tags: ['cases'],
  description:
    'Retrieve all cases under the specified parent. Note: Listing cases under an Organization returns only the cases directly parented by that organization. To retrieve all cases under an organization, including cases parented by projects under that organization, use `cases.search`.',
  operationId: 'cloudsupport.cases.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'An expression written in filter language. If non-empty, the query returns the cases that match the filter. Else, the query doesn\'t filter the cases. Filter expressions use the following fields with the operators equals (`=`) and `AND`: - `state`: The accepted values are `OPEN` or `CLOSED`. - `priority`: The accepted values are `P0`, `P1`, `P2`, `P3`, or `P4`. You can specify multiple values for priority using the `OR` operator. For example, `priority=P1 OR priority=P2`. - [DEPRECATED] `severity`: The accepted values are `S0`, `S1`, `S2`, `S3`, or `S4`. - `creator.email`: The email address of the case creator. Examples: - `state=CLOSED` - `state=OPEN AND creator.email="tester@example.com"` - `state=OPEN AND (priority=P0 OR priority=P1)`',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
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
            description: 'The maximum number of cases fetched with each request. Defaults to 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying the page of results to return. If unspecified, the first page is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The fully qualified name of parent resource to list cases under.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2betaParentCasesRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/cases',
  tags: ['cases'],
  description:
    'Create a new case and associate it with the given Cloud resource. The case object must have the following fields set: display_name, description, classification, and severity.',
  operationId: 'cloudsupport.cases.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the Cloud resource under which the case should be created.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CaseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2betaParentCommentsRoute = createRoute({
  method: 'get',
  path: '/v2beta/{parent}/comments',
  tags: ['cases'],
  description: 'Retrieve all Comments associated with the Case object.',
  operationId: 'cloudsupport.cases.comments.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'The maximum number of comments fetched with each request. Defaults to 10.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A token identifying the page of results to return. If unspecified, the first page is retrieved.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of Case object for which comments should be listed.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCommentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2betaParentCommentsRoute = createRoute({
  method: 'post',
  path: '/v2beta/{parent}/comments',
  tags: ['cases'],
  description:
    'Add a new comment to the specified Case. The comment object must have the following fields set: body.',
  operationId: 'cloudsupport.cases.comments.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of Case to which this comment should be added.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
