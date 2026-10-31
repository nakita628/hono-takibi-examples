import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GdataBlobstore2InfoSchema = z
  .object({
    blobGeneration: z.string().exactOptional().openapi({ description: 'gdata' }),
    blobId: z.string().exactOptional().openapi({ description: 'gdata' }),
    downloadReadHandle: z.string().exactOptional().openapi({ description: 'gdata' }),
    readToken: z.string().exactOptional().openapi({ description: 'gdata' }),
    uploadMetadataContainer: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataBlobstore2Info')

const GdataObjectIdSchema = z
  .object({
    bucketName: z.string().exactOptional().openapi({ description: 'gdata' }),
    generation: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectName: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataObjectId')

const GdataCompositeMediaSchema = z
  .object({
    blobRef: z.string().exactOptional().openapi({ description: 'gdata' }),
    blobstore2Info: GdataBlobstore2InfoSchema.exactOptional().openapi({ description: 'gdata' }),
    cosmoBinaryReference: z.string().exactOptional().openapi({ description: 'gdata' }),
    crc32cHash: z.uint32().exactOptional().openapi({ description: 'gdata' }),
    inline: z.string().exactOptional().openapi({ description: 'gdata' }),
    length: z.string().exactOptional().openapi({ description: 'gdata' }),
    md5Hash: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectId: GdataObjectIdSchema.exactOptional().openapi({ description: 'gdata' }),
    path: z.string().exactOptional().openapi({ description: 'gdata' }),
    referenceType: z
      .enum(['PATH', 'BLOB_REF', 'INLINE', 'BIGSTORE_REF', 'COSMO_BINARY_REFERENCE'])
      .exactOptional()
      .openapi({ description: 'gdata' }),
    sha1Hash: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataCompositeMedia')

const GdataContentTypeInfoSchema = z
  .object({
    bestGuess: z.string().exactOptional().openapi({ description: 'gdata' }),
    fromBytes: z.string().exactOptional().openapi({ description: 'gdata' }),
    fromFileName: z.string().exactOptional().openapi({ description: 'gdata' }),
    fromHeader: z.string().exactOptional().openapi({ description: 'gdata' }),
    fromUrlPath: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataContentTypeInfo')

const GdataDiffChecksumsResponseSchema = z
  .object({
    checksumsLocation: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
    chunkSizeBytes: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectLocation: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
    objectSizeBytes: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectVersion: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDiffChecksumsResponse')

const GdataDiffDownloadResponseSchema = z
  .object({
    objectLocation: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDiffDownloadResponse')

const GdataDiffUploadRequestSchema = z
  .object({
    checksumsInfo: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
    objectInfo: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
    objectVersion: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDiffUploadRequest')

const GdataDiffUploadResponseSchema = z
  .object({
    objectVersion: z.string().exactOptional().openapi({ description: 'gdata' }),
    originalObject: GdataCompositeMediaSchema.exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDiffUploadResponse')

const GdataDiffVersionResponseSchema = z
  .object({
    objectSizeBytes: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectVersion: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDiffVersionResponse')

const GdataDownloadParametersSchema = z
  .object({
    allowGzipCompression: z.boolean().exactOptional().openapi({ description: 'gdata' }),
    ignoreRange: z.boolean().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataDownloadParameters')

const GdataMediaSchema = z
  .object({
    algorithm: z.string().exactOptional().openapi({ description: 'gdata' }),
    bigstoreObjectRef: z.string().exactOptional().openapi({ description: 'gdata' }),
    blobRef: z.string().exactOptional().openapi({ description: 'gdata' }),
    blobstore2Info: GdataBlobstore2InfoSchema.exactOptional().openapi({ description: 'gdata' }),
    compositeMedia: z
      .array(GdataCompositeMediaSchema)
      .exactOptional()
      .openapi({ description: 'gdata' }),
    contentType: z.string().exactOptional().openapi({ description: 'gdata' }),
    contentTypeInfo: GdataContentTypeInfoSchema.exactOptional().openapi({ description: 'gdata' }),
    cosmoBinaryReference: z.string().exactOptional().openapi({ description: 'gdata' }),
    crc32cHash: z.uint32().exactOptional().openapi({ description: 'gdata' }),
    diffChecksumsResponse: GdataDiffChecksumsResponseSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    diffDownloadResponse: GdataDiffDownloadResponseSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    diffUploadRequest: GdataDiffUploadRequestSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    diffUploadResponse: GdataDiffUploadResponseSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    diffVersionResponse: GdataDiffVersionResponseSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    downloadParameters: GdataDownloadParametersSchema.exactOptional().openapi({
      description: 'gdata',
    }),
    filename: z.string().exactOptional().openapi({ description: 'gdata' }),
    hash: z.string().exactOptional().openapi({ description: 'gdata' }),
    hashVerified: z.boolean().exactOptional().openapi({ description: 'gdata' }),
    inline: z.string().exactOptional().openapi({ description: 'gdata' }),
    isPotentialRetry: z.boolean().exactOptional().openapi({ description: 'gdata' }),
    length: z.string().exactOptional().openapi({ description: 'gdata' }),
    md5Hash: z.string().exactOptional().openapi({ description: 'gdata' }),
    mediaId: z.string().exactOptional().openapi({ description: 'gdata' }),
    objectId: GdataObjectIdSchema.exactOptional().openapi({ description: 'gdata' }),
    path: z.string().exactOptional().openapi({ description: 'gdata' }),
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
      .openapi({ description: 'gdata' }),
    sha1Hash: z.string().exactOptional().openapi({ description: 'gdata' }),
    sha256Hash: z.string().exactOptional().openapi({ description: 'gdata' }),
    timestamp: z.string().exactOptional().openapi({ description: 'gdata' }),
    token: z.string().exactOptional().openapi({ description: 'gdata' }),
  })
  .openapi({ description: 'gdata', required: [] })
  .openapi('GdataMedia')

const JobSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation date/time of the job.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time when this job will expire/expired. After a job expired, no new reports are generated.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server-generated ID of the job (max. 40 characters).' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the job (max. 100 characters).' }),
    reportTypeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of reports this job creates. Corresponds to the ID of a ReportType.',
      }),
    systemManaged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this a system-managed job that cannot be modified by the user; otherwise false.',
      }),
  })
  .openapi({ description: 'A job creating reports of a specific type.', required: [] })
  .openapi('Job')

const ListJobsResponseSchema = z
  .object({
    jobs: z.array(JobSchema).exactOptional().openapi({ description: 'The list of jobs.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in the ListJobsRequest.page_token field in the subsequent call to `ListJobs` method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for ReportingService.ListJobs.', required: [] })
  .openapi('ListJobsResponse')

const ReportTypeSchema = z
  .object({
    deprecateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date/time when this report type was/will be deprecated.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the report type (max. 100 characters).' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the report type (max. 100 characters).' }),
    systemManaged: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this a system-managed report type; otherwise false. Reporting jobs for system-managed report types are created automatically and can thus not be used in the `CreateJob` method.',
      }),
  })
  .openapi({ description: 'A report type.', required: [] })
  .openapi('ReportType')

const ListReportTypesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in the ListReportTypesRequest.page_token field in the subsequent call to `ListReportTypes` method to retrieve the next page of results.',
      }),
    reportTypes: z
      .array(ReportTypeSchema)
      .exactOptional()
      .openapi({ description: 'The list of report types.' }),
  })
  .openapi({ description: 'Response message for ReportingService.ListReportTypes.', required: [] })
  .openapi('ListReportTypesResponse')

const ReportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date/time when this report was created.' }),
    downloadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL from which the report can be downloaded (max. 1000 characters).',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end of the time period that the report instance covers. The value is exclusive.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The server-generated ID of the report.' }),
    jobExpireTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date/time when the job this report belongs to will expire/expired.',
      }),
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the job that created this report.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start of the time period that the report instance covers. The value is inclusive.',
      }),
  })
  .openapi({
    description:
      "A report's metadata including the URL from which the report itself can be downloaded.",
    required: [],
  })
  .openapi('Report')

const ListReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in the ListReportsRequest.page_token field in the subsequent call to `ListReports` method to retrieve the next page of results.',
      }),
    reports: z
      .array(ReportSchema)
      .exactOptional()
      .openapi({ description: 'The list of report types.' }),
  })
  .openapi({ description: 'Response message for ReportingService.ListReports.', required: [] })
  .openapi('ListReportsResponse')

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
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly':
          'View monetary and non-monetary YouTube Analytics reports for your YouTube content',
        'https://www.googleapis.com/auth/yt-analytics.readonly':
          'View YouTube Analytics reports for your YouTube content',
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
        'https://www.googleapis.com/auth/yt-analytics-monetary.readonly':
          'View monetary and non-monetary YouTube Analytics reports for your YouTube content',
        'https://www.googleapis.com/auth/yt-analytics.readonly':
          'View YouTube Analytics reports for your YouTube content',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1JobsRoute = createRoute({
  method: 'get',
  path: '/v1/jobs',
  tags: ['jobs'],
  description: 'Lists jobs.',
  operationId: 'youtubereporting.jobs.list',
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
      includeSystemManaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.',
            in: 'query',
            name: 'includeSystemManaged',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
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
            description:
              'Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const postV1JobsRoute = createRoute({
  method: 'post',
  path: '/v1/jobs',
  tags: ['jobs'],
  description: 'Creates a job and returns it.',
  operationId: 'youtubereporting.jobs.create',
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
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const getV1JobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/jobs/{jobId}',
  tags: ['jobs'],
  description: 'Gets a job.',
  operationId: 'youtubereporting.jobs.get',
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
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the job to retrieve.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const deleteV1JobsJobIdRoute = createRoute({
  method: 'delete',
  path: '/v1/jobs/{jobId}',
  tags: ['jobs'],
  description: 'Deletes a job.',
  operationId: 'youtubereporting.jobs.delete',
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
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the job to delete.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const getV1JobsJobIdReportsRoute = createRoute({
  method: 'get',
  path: '/v1/jobs/{jobId}/reports',
  tags: ['jobs'],
  description:
    'Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.',
  operationId: 'youtubereporting.jobs.reports.list',
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
      createdAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only reports created after the specified date/time are returned.',
            in: 'query',
            name: 'createdAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
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
            description:
              'Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTimeAtOrAfter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only reports whose start time is greater than or equal the specified date/time are returned.',
            in: 'query',
            name: 'startTimeAtOrAfter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTimeBefore: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only reports whose start time is smaller than the specified date/time are returned.',
            in: 'query',
            name: 'startTimeBefore',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the job.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const getV1JobsJobIdReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/v1/jobs/{jobId}/reports/{reportId}',
  tags: ['jobs'],
  description: 'Gets the metadata of a specific report.',
  operationId: 'youtubereporting.jobs.reports.get',
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
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      jobId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the job.',
            in: 'path',
            name: 'jobId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report to retrieve.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const getV1MediaResourceNameRoute = createRoute({
  method: 'get',
  path: '/v1/media/{resourceName}',
  tags: ['media'],
  description:
    'Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.',
  operationId: 'youtubereporting.media.download',
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
      resourceName: z
        .string()
        .openapi({
          param: {
            description: 'Name of the media that is being downloaded.',
            in: 'path',
            name: 'resourceName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GdataMediaSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})

export const getV1ReportTypesRoute = createRoute({
  method: 'get',
  path: '/v1/reportTypes',
  tags: ['reportTypes'],
  description: 'Lists report types.',
  operationId: 'youtubereporting.reportTypes.list',
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
      includeSystemManaged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.',
            in: 'query',
            name: 'includeSystemManaged',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      onBehalfOfContentOwner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).",
            in: 'query',
            name: 'onBehalfOfContentOwner',
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
            description:
              'Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReportTypesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics-monetary.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/yt-analytics.readonly'],
    },
  ],
})
