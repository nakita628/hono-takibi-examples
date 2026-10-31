import { createRoute, z } from '@hono/zod-openapi'

const ConnectProtocolVersionSchema = z
  .literal(1)
  .openapi({
    title: 'Connect-Protocol-Version',
    description: 'Define the version of the Connect protocol',
  })
  .openapi('ConnectProtocolVersion')

const ConnectTimeoutHeaderSchema = z
  .number()
  .openapi({ title: 'Connect-Timeout-Ms', description: 'Define the timeout, in ms' })
  .openapi('ConnectTimeoutHeader')

const ConnectErrorDetailsAnySchema = z
  .looseObject({
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL that acts as a globally unique identifier for the type of the serialized message. For example: `type.googleapis.com/google.rpc.ErrorInfo`. This is used to determine the schema of the data in the `value` field and is the discriminator for the `debug` field.',
      }),
    value: z
      .file()
      .exactOptional()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'The Protobuf message, serialized as bytes and base64-encoded. The specific message type is identified by the `type` field.',
      }),
    debug: z
      .xor([
        z.looseObject({}).openapi({ title: 'Any', description: 'Detailed error information.' }),
      ])
      .exactOptional()
      .openapi({
        discriminator: { propertyName: 'type' },
        title: 'Debug',
        description:
          "Deserialized error detail payload. The 'type' field indicates the schema. This field is for easier debugging and should not be relied upon for application logic.",
      }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message, with an additional debug field for ConnectRPC error details.',
    required: [],
  })
  .openapi('ConnectErrorDetailsAny')

const ConnectErrorSchema = z
  .looseObject({
    code: z
      .enum([
        'canceled',
        'unknown',
        'invalid_argument',
        'deadline_exceeded',
        'not_found',
        'already_exists',
        'permission_denied',
        'resource_exhausted',
        'failed_precondition',
        'aborted',
        'out_of_range',
        'unimplemented',
        'internal',
        'unavailable',
        'data_loss',
        'unauthenticated',
      ])
      .exactOptional()
      .openapi({
        examples: ['not_found'],
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
    details: z
      .array(ConnectErrorDetailsAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is no limit on the number of messages.',
      }),
  })
  .openapi({
    title: 'Connect Error',
    description:
      'Error type returned by Connect: https://connectrpc.com/docs/go/errors/#http-representation',
    required: [],
  })
  .openapi('ConnectError')

const VcsV1CommitAuthorSchema = z
  .strictObject({
    login: z.string().exactOptional().openapi({ title: 'login', description: 'the author login' }),
    avatarURL: z
      .string()
      .exactOptional()
      .openapi({ title: 'avatarURL', description: 'the author avatar URL' }),
  })
  .openapi({ title: 'CommitAuthor', required: [] })
  .openapi('VcsV1CommitAuthor')

const VcsV1CommitInfoSchema = z
  .strictObject({
    message: z
      .string()
      .exactOptional()
      .openapi({ title: 'message', description: 'the commit message' }),
    author: VcsV1CommitAuthorSchema.exactOptional().openapi({
      title: 'author',
      description: 'the commit author login',
    }),
    date: z.string().exactOptional().openapi({ title: 'date', description: 'the commit date' }),
    sha: z.string().exactOptional().openapi({ title: 'sha', description: 'the commit sha' }),
    URL: z
      .string()
      .exactOptional()
      .openapi({ title: 'URL', description: 'the full URL to the commit' }),
  })
  .openapi({ title: 'CommitInfo', required: [] })
  .openapi('VcsV1CommitInfo')

const VcsV1GetCommitRequestSchema = z
  .strictObject({
    repositoryURL: z
      .string()
      .exactOptional()
      .openapi({ title: 'repositoryURL', description: 'the full path to the repository' }),
    ref: z
      .string()
      .exactOptional()
      .openapi({ title: 'ref', description: 'the vcs ref to get the file from' }),
  })
  .openapi({ title: 'GetCommitRequest', required: [] })
  .openapi('VcsV1GetCommitRequest')

const VcsV1GetCommitResponseSchema = z
  .strictObject({
    message: z
      .string()
      .exactOptional()
      .openapi({ title: 'message', description: 'the commit message' }),
    author: VcsV1CommitAuthorSchema.exactOptional().openapi({
      title: 'author',
      description: 'the commit author login',
    }),
    date: z.string().exactOptional().openapi({ title: 'date', description: 'the commit date' }),
    sha: z.string().exactOptional().openapi({ title: 'sha', description: 'the commit sha' }),
    URL: z
      .string()
      .exactOptional()
      .openapi({ title: 'URL', description: 'the full URL to the commit' }),
  })
  .openapi({ title: 'GetCommitResponse', required: [] })
  .openapi('VcsV1GetCommitResponse')

const VcsV1GetCommitsRequestSchema = z
  .strictObject({
    repositoryUrl: z.string().exactOptional().openapi({ title: 'repository_url' }),
    refs: z.array(z.string()).exactOptional().openapi({ title: 'refs' }),
  })
  .openapi({
    title: 'GetCommitsRequest',
    description: 'New messages for the GetCommits method',
    required: [],
  })
  .openapi('VcsV1GetCommitsRequest')

const VcsV1GetCommitsResponseSchema = z
  .strictObject({
    commits: z.array(VcsV1CommitInfoSchema).exactOptional().openapi({ title: 'commits' }),
  })
  .openapi({ title: 'GetCommitsResponse', required: [] })
  .openapi('VcsV1GetCommitsResponse')

const VcsV1GetFileRequestSchema = z
  .strictObject({
    repositoryURL: z
      .string()
      .exactOptional()
      .openapi({ title: 'repositoryURL', description: 'the full path to the repository' }),
    ref: z
      .string()
      .exactOptional()
      .openapi({ title: 'ref', description: 'the vcs ref to get the file from' }),
    localPath: z
      .string()
      .exactOptional()
      .openapi({
        title: 'localPath',
        description: 'the path to the file as provided by the symbols',
      }),
    rootPath: z
      .string()
      .exactOptional()
      .openapi({
        title: 'rootPath',
        description: 'the root path where the project lives inside the repository',
      }),
    functionName: z
      .string()
      .exactOptional()
      .openapi({
        title: 'functionName',
        description: 'the function name as provided by the symbols',
      }),
  })
  .openapi({ title: 'GetFileRequest', required: [] })
  .openapi('VcsV1GetFileRequest')

const VcsV1GetFileResponseSchema = z
  .strictObject({
    content: z
      .string()
      .exactOptional()
      .openapi({ title: 'content', description: 'base64 content of the file' }),
    URL: z
      .string()
      .exactOptional()
      .openapi({ title: 'URL', description: 'the full URL to the file' }),
  })
  .openapi({ title: 'GetFileResponse', required: [] })
  .openapi('VcsV1GetFileResponse')

const VcsV1GithubAppRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GithubAppRequest' })
  .openapi('VcsV1GithubAppRequest')

const VcsV1GithubAppResponseSchema = z
  .strictObject({
    clientID: z
      .string()
      .exactOptional()
      .openapi({
        title: 'clientID',
        description:
          'clientID must be propagated when calling\n https://github.com/login/oauth/authorize in the client_id query parameter.',
      }),
    callbackURL: z
      .string()
      .exactOptional()
      .openapi({
        title: 'callbackURL',
        description:
          'If callbackURL is not empty, the URL should be propagated when\n calling https://github.com/login/oauth/authorize in the\n redirect_uri query parameter.',
      }),
  })
  .openapi({ title: 'GithubAppResponse', required: [] })
  .openapi('VcsV1GithubAppResponse')

const VcsV1GithubLoginRequestSchema = z
  .strictObject({
    authorizationCode: z.string().exactOptional().openapi({ title: 'authorizationCode' }),
  })
  .openapi({ title: 'GithubLoginRequest', required: [] })
  .openapi('VcsV1GithubLoginRequest')

const VcsV1GithubLoginResponseSchema = z
  .strictObject({
    cookie: z
      .string()
      .exactOptional()
      .openapi({
        title: 'cookie',
        description:
          "Deprecated\n In future version, this cookie won't be sent. Now, old cookie is sent\n alongside the new expected data (token, token_expires_at and\n refresh_token_expires_at). Frontend will be responsible of computing its\n own cookie from the new data. Remove after completing\n https://github.com/grafana/explore-profiles/issues/187",
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({ title: 'token', description: 'base64 encoded encrypted token' }),
    tokenExpiresAt: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'token_expires_at',
        description: 'Unix ms timestamp of when the token expires.',
      }),
    refreshTokenExpiresAt: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'refresh_token_expires_at',
        description: 'Unix ms timestamp of when the refresh token expires.',
      }),
  })
  .openapi({ title: 'GithubLoginResponse', required: [] })
  .openapi('VcsV1GithubLoginResponse')

const VcsV1GithubRefreshRequestSchema = z
  .strictObject({})
  .openapi({ title: 'GithubRefreshRequest' })
  .openapi('VcsV1GithubRefreshRequest')

const VcsV1GithubRefreshResponseSchema = z
  .strictObject({
    cookie: z
      .string()
      .exactOptional()
      .openapi({
        title: 'cookie',
        description:
          "Deprecated\n In future version, this cookie won't be sent. Now, old cookie is sent\n alongside the new expected data (token, token_expires_at and\n refresh_token_expires_at). Frontend will be responsible of computing its\n own cookie from the new data. Remove after completing\n https://github.com/grafana/explore-profiles/issues/187",
      }),
    token: z
      .string()
      .exactOptional()
      .openapi({ title: 'token', description: 'base64 encoded encrypted token' }),
    tokenExpiresAt: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'token_expires_at',
        description: 'Unix ms timestamp of when the token expires.',
      }),
    refreshTokenExpiresAt: z
      .union([
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
        z.string(),
      ])
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        title: 'refresh_token_expires_at',
        description: 'Unix ms timestamp of when the refresh token expires.',
      }),
  })
  .openapi({ title: 'GithubRefreshResponse', required: [] })
  .openapi('VcsV1GithubRefreshResponse')

export const postVcsV1VCSServiceGetCommitRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GetCommit',
  tags: ['vcs.v1.VCSService'],
  summary: 'GetCommit',
  operationId: 'vcs.v1.VCSService.GetCommit',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GetCommitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GetCommitResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postVcsV1VCSServiceGetCommitsRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GetCommits',
  tags: ['vcs.v1.VCSService'],
  summary: 'GetCommits',
  operationId: 'vcs.v1.VCSService.GetCommits',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GetCommitsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GetCommitsResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postVcsV1VCSServiceGetFileRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GetFile',
  tags: ['vcs.v1.VCSService'],
  summary: 'GetFile',
  operationId: 'vcs.v1.VCSService.GetFile',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GetFileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GetFileResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postVcsV1VCSServiceGithubAppRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GithubApp',
  tags: ['vcs.v1.VCSService'],
  summary: 'GithubApp',
  operationId: 'vcs.v1.VCSService.GithubApp',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GithubAppRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GithubAppResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postVcsV1VCSServiceGithubLoginRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GithubLogin',
  tags: ['vcs.v1.VCSService'],
  summary: 'GithubLogin',
  operationId: 'vcs.v1.VCSService.GithubLogin',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GithubLoginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GithubLoginResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})

export const postVcsV1VCSServiceGithubRefreshRoute = createRoute({
  method: 'post',
  path: '/vcs.v1.VCSService/GithubRefresh',
  tags: ['vcs.v1.VCSService'],
  summary: 'GithubRefresh',
  operationId: 'vcs.v1.VCSService.GithubRefresh',
  request: {
    headers: z.object({
      'Connect-Protocol-Version': z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        ConnectProtocolVersionSchema.openapi({
          param: {
            name: 'Connect-Protocol-Version',
            in: 'header',
            required: true,
            schema: { $ref: '#/components/schemas/connect-protocol-version' },
          },
        }),
      ),
      'Connect-Timeout-Ms': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          ConnectTimeoutHeaderSchema.openapi({
            param: {
              name: 'Connect-Timeout-Ms',
              in: 'header',
              schema: { $ref: '#/components/schemas/connect-timeout-header' },
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
    body: {
      content: { 'application/json': { schema: VcsV1GithubRefreshRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: VcsV1GithubRefreshResponseSchema } },
    },
    default: {
      description: 'Error',
      content: { 'application/json': { schema: ConnectErrorSchema } },
    },
  },
})
