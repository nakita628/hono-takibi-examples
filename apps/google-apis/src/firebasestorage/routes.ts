import { createRoute, z } from '@hono/zod-openapi'

const AddFirebaseRequestSchema = z
  .object({})
  .openapi({
    description: 'The request used to link a Google Cloud Storage bucket to a Firebase project.',
  })
  .openapi('AddFirebaseRequest')

const BucketSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Resource name of the bucket.' }),
  })
  .openapi({
    description: 'A storage bucket and its relation to a parent Firebase project.',
    required: [],
  })
  .openapi('Bucket')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the LRO was created.' }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the LRO was last updated.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'CREATING_TEMP_BUCKET',
        'TRANSFERRING_TO_TEMP',
        'DELETING_SOURCE_BUCKET',
        'CREATING_DESTINATION_BUCKET',
        'TRANSFERRING_TO_DESTINATION',
        'DELETING_TEMP_BUCKET',
        'SUCCEEDED',
        'FAILED',
        'ROLLING_BACK',
        'ROLLED_BACK',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the migration.' }),
  })
  .openapi({ description: 'Metadata for MigrateLocationDestructively LRO.', required: [] })
  .openapi('GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata')

const GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the LRO was created.' }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the LRO was last updated.' }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'CREATING_TEMP_BUCKET',
        'TRANSFERRING_TO_TEMP',
        'DELETING_SOURCE_BUCKET',
        'CREATING_DESTINATION_BUCKET',
        'TRANSFERRING_TO_DESTINATION',
        'DELETING_TEMP_BUCKET',
        'SUCCEEDED',
        'FAILED',
        'ROLLING_BACK',
        'ROLLED_BACK',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the migration.' }),
  })
  .openapi({ description: 'Metadata for MigrateLocationDestructively LRO.', required: [] })
  .openapi('GoogleFirebaseStorageControlplaneV1betaMigrateLocationDestructivelyMetadata')

const ListBucketsResponseSchema = z
  .object({
    buckets: z
      .array(BucketSchema)
      .exactOptional()
      .openapi({ description: 'The list of linked buckets.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response returned by `ListBuckets`.', required: [] })
  .openapi('ListBucketsResponse')

const RemoveFirebaseRequestSchema = z
  .object({})
  .openapi({
    description:
      'The request used to unlink a Google Cloud Storage bucket from a Firebase project.',
  })
  .openapi('RemoveFirebaseRequest')

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
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
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
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1betaBucketAddFirebaseRoute = createRoute({
  method: 'post',
  path: '/v1beta/{bucket}:addFirebase',
  tags: ['projects'],
  description: 'Links a Google Cloud Storage bucket to a Firebase project.',
  operationId: 'firebasestorage.projects.buckets.addFirebase',
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
      bucket: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddFirebaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const postV1betaBucketRemoveFirebaseRoute = createRoute({
  method: 'post',
  path: '/v1beta/{bucket}:removeFirebase',
  tags: ['projects'],
  description: 'Unlinks a linked Google Cloud Storage bucket from a Firebase project.',
  operationId: 'firebasestorage.projects.buckets.removeFirebase',
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
      bucket: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.',
            in: 'path',
            name: 'bucket',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveFirebaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Gets a single linked storage bucket.',
  operationId: 'firebasestorage.projects.buckets.get',
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
            description:
              'Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_number}/buckets/{bucket_id}`.',
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
      content: { 'application/json': { schema: BucketSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1betaParentBucketsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/buckets',
  tags: ['projects'],
  description: 'Lists the linked storage buckets for a project.',
  operationId: 'firebasestorage.projects.buckets.list',
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
              'The maximum number of buckets to return. If not set, the server will use a reasonable default.',
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
              'A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token.',
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
              'Required. Resource name of the parent Firebase project, `projects/{project_number}`.',
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
      content: { 'application/json': { schema: ListBucketsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})
