import { createRoute, z } from '@hono/zod-openapi'

const AddPublicKeyMetadataSchema = z
  .object({})
  .openapi({
    description: 'Message included in the metadata field of operations returned from AddPublicKey.',
  })
  .openapi('AddPublicKeyMetadata')

const AddPublicKeyRequestSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64.',
      }),
  })
  .openapi({ description: 'Request message for AddPublicKey.', required: [] })
  .openapi('AddPublicKeyRequest')

const AddPublicKeyResponseSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key that was added to the environment.' }),
  })
  .openapi({ description: 'Response message for AddPublicKey.', required: [] })
  .openapi('AddPublicKeyResponse')

const AuthorizeEnvironmentMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Message included in the metadata field of operations returned from AuthorizeEnvironment.',
  })
  .openapi('AuthorizeEnvironmentMetadata')

const AuthorizeEnvironmentRequestSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OAuth access token that should be sent to the environment.' }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the credentials expire. If not set, defaults to one hour from when the server received the request.',
      }),
    idToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The OAuth ID token that should be sent to the environment.' }),
  })
  .openapi({ description: 'Request message for AuthorizeEnvironment.', required: [] })
  .openapi('AuthorizeEnvironmentRequest')

const AuthorizeEnvironmentResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for AuthorizeEnvironment.' })
  .openapi('AuthorizeEnvironmentResponse')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CreateEnvironmentMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Message included in the metadata field of operations returned from CreateEnvironment.',
  })
  .openapi('CreateEnvironmentMetadata')

const DeleteEnvironmentMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Message included in the metadata field of operations returned from DeleteEnvironment.',
  })
  .openapi('DeleteEnvironmentMetadata')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const EnvironmentSchema = z
  .object({
    dockerImage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest".',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The environment's identifier, unique among the user's environments.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`.',
      }),
    publicKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods.',
        readOnly: true,
      }),
    sshHost: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Host to which clients can connect to initiate SSH sessions with the environment.',
        readOnly: true,
      }),
    sshPort: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. Port to which clients can connect to initiate SSH sessions with the environment.',
        readOnly: true,
      }),
    sshUsername: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Username that clients should use when initiating SSH sessions with the environment.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SUSPENDED', 'PENDING', 'RUNNING', 'DELETING'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current execution state of this environment.',
        readOnly: true,
      }),
    webHost: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user\'s data that will remain across sessions. Each user has at least an environment with the ID "default".',
    required: [],
  })
  .openapi('Environment')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const RemovePublicKeyMetadataSchema = z
  .object({})
  .openapi({
    description:
      'Message included in the metadata field of operations returned from RemovePublicKey.',
  })
  .openapi('RemovePublicKeyMetadata')

const RemovePublicKeyRequestSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Key that should be removed from the environment.' }),
  })
  .openapi({ description: 'Request message for RemovePublicKey.', required: [] })
  .openapi('RemovePublicKeyRequest')

const RemovePublicKeyResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for RemovePublicKey.' })
  .openapi('RemovePublicKeyResponse')

const StartEnvironmentMetadataSchema = z
  .object({
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STARTING',
        'UNARCHIVING_DISK',
        'AWAITING_COMPUTE_RESOURCES',
        'FINISHED',
      ])
      .exactOptional()
      .openapi({ description: 'Current state of the environment being started.' }),
  })
  .openapi({
    description:
      'Message included in the metadata field of operations returned from StartEnvironment.',
    required: [],
  })
  .openapi('StartEnvironmentMetadata')

const StartEnvironmentRequestSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment.',
      }),
    publicKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Public keys that should be added to the environment before it is started.',
      }),
  })
  .openapi({ description: 'Request message for StartEnvironment.', required: [] })
  .openapi('StartEnvironmentRequest')

const StartEnvironmentResponseSchema = z
  .object({
    environment: EnvironmentSchema.exactOptional().openapi({
      description: 'Environment that was started.',
    }),
  })
  .openapi({
    description:
      'Message included in the response field of operations returned from StartEnvironment once the operation is complete.',
    required: [],
  })
  .openapi('StartEnvironmentResponse')

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

export const postV1EnvironmentAddPublicKeyRoute = createRoute({
  method: 'post',
  path: '/v1/{environment}:addPublicKey',
  tags: ['users'],
  description:
    'Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.',
  operationId: 'cloudshell.users.environments.addPublicKey',
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
      environment: z
        .string()
        .openapi({
          param: {
            description:
              'Environment this key should be added to, e.g. `users/me/environments/default`.',
            in: 'path',
            name: 'environment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddPublicKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1EnvironmentRemovePublicKeyRoute = createRoute({
  method: 'post',
  path: '/v1/{environment}:removePublicKey',
  tags: ['users'],
  description:
    'Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.',
  operationId: 'cloudshell.users.environments.removePublicKey',
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
      environment: z
        .string()
        .openapi({
          param: {
            description:
              'Environment this key should be removed from, e.g. `users/me/environments/default`.',
            in: 'path',
            name: 'environment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemovePublicKeyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['users'],
  description: 'Gets an environment. Returns NOT_FOUND if the environment does not exist.',
  operationId: 'cloudshell.users.environments.get',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
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
            description:
              'Required. Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.',
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
      content: { 'application/json': { schema: EnvironmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'cloudshell.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAuthorizeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:authorize',
  tags: ['users'],
  description:
    'Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.',
  operationId: 'cloudshell.users.environments.authorize',
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
              'Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AuthorizeEnvironmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['operations'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'cloudshell.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
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
  ],
})

export const postV1NameStartRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:start',
  tags: ['users'],
  description:
    'Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.',
  operationId: 'cloudshell.users.environments.start',
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
              'Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartEnvironmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
