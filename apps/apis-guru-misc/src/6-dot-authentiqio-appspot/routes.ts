import { createRoute, z } from '@hono/zod-openapi'

const AuthentiqIDSchema = z
  .object({
    devtoken: z.string().exactOptional().openapi({ description: 'device token for push messages' }),
    sub: z.string().openapi({ description: 'UUID and public signing key' }),
  })
  .openapi({ description: 'Authentiq ID in JWT format, self-signed.\n', required: ['sub'] })
  .openapi('AuthentiqID')

const ClaimsSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: '' }),
    phone: z.string().exactOptional().openapi({ description: '' }),
    scope: z.string().openapi({ description: 'claim scope' }),
    sub: z.string().openapi({ description: 'UUID' }),
    type: z.string().exactOptional().openapi({ description: '' }),
  })
  .openapi({
    description: 'Claim in JWT format, self- or issuer-signed. \n',
    required: ['sub', 'scope'],
  })
  .openapi('Claims')

const ErrorSchema = z
  .object({
    detail: z.string().exactOptional(),
    error: z.int(),
    title: z.string().exactOptional(),
    type: z.string().exactOptional().openapi({ description: 'unique uri for this error' }),
  })
  .openapi({ required: ['error'] })
  .openapi('Error')

const PushTokenSchema = z
  .object({
    aud: z.string().openapi({ description: 'audience (URI)' }),
    exp: z.int().exactOptional(),
    iat: z.int().exactOptional(),
    iss: z.string().openapi({ description: 'issuer (URI)' }),
    nbf: z.int().exactOptional(),
    sub: z.string().openapi({ description: 'UUID and public signing key' }),
  })
  .openapi({
    description: 'PushToken in JWT format, self-signed. \n',
    required: ['sub', 'iss', 'aud'],
  })
  .openapi('PushToken')

const ErrorResponseResponse = {
  description: 'Error response',
  content: { '*/*': { schema: ErrorSchema } },
}

const JobIDParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Job ID (20 chars)',
      in: 'path',
      name: 'job',
      required: true,
      schema: { type: 'string' },
    },
  })

const PKParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Public Signing Key - Authentiq ID (43 chars)',
      in: 'path',
      name: 'PK',
      required: true,
      schema: { type: 'string' },
    },
  })

const AuthentiqIDRequestBody = {
  description: 'Authentiq ID to register',
  content: { 'application/jwt': { schema: AuthentiqIDSchema } },
  required: true,
}

export const postKeyRoute = createRoute({
  method: 'post',
  path: '/key',
  tags: ['key', 'post'],
  description:
    'Register a new ID `JWT(sub, devtoken)`\n\nv5: `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'key_register',
  request: { body: AuthentiqIDRequestBody },
  responses: {
    201: {
      description: 'Successfully registered',
      content: {
        'application/json': {
          schema: z
            .object({
              secret: z.string().exactOptional().openapi({ description: 'revoke key' }),
              status: z.string().exactOptional().openapi({ description: 'registered' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    409: {
      description: 'Key already registered `duplicate-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const deleteKeyRoute = createRoute({
  method: 'delete',
  path: '/key',
  tags: ['key', 'delete'],
  description:
    'Revoke an Authentiq ID using email & phone.\n\nIf called with `email` and `phone` only, a verification code \nwill be sent by email. Do a second call adding `code` to \ncomplete the revocation.\n',
  operationId: 'key_revoke_nosecret',
  request: {
    query: z.object({
      email: z
        .string()
        .openapi({
          param: {
            description: 'primary email associated to Key (ID)',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      phone: z
        .string()
        .openapi({
          param: {
            description: 'primary phone number, international representation',
            in: 'query',
            name: 'phone',
            required: true,
            schema: { type: 'string' },
          },
        }),
      code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'verification code sent by email',
            in: 'query',
            name: 'code',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successfully deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              status: z.string().exactOptional().openapi({ description: 'pending or done' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Authentication error `auth-error`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Unknown key `unknown-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Confirm with code sent `confirm-first`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getKeyPKRoute = createRoute({
  method: 'get',
  path: '/key/{PK}',
  tags: ['key', 'get'],
  description: 'Get public details of an Authentiq ID.\n',
  operationId: 'key_retrieve',
  request: { params: z.object({ PK: PKParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully retrieved',
      content: {
        'application/json': {
          schema: z
            .object({
              since: z.iso.datetime({ offset: true }).exactOptional(),
              status: z.string().exactOptional(),
              sub: z
                .string()
                .exactOptional()
                .openapi({ description: 'base64safe encoded public signing key' }),
            })
            .openapi({ title: 'JWT', required: [] }),
        },
      },
    },
    404: {
      description: 'Unknown key `unknown-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    410: {
      description: 'Key is revoked (gone). `revoked-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const putKeyPKRoute = createRoute({
  method: 'put',
  path: '/key/{PK}',
  tags: ['key', 'put'],
  description:
    'Update Authentiq ID by replacing the object.\n\nv4: `JWT(sub,email,phone)` to bind email/phone hash; \n\nv5: POST issuer-signed email & phone scopes\nand PUT to update registration `JWT(sub, pk, devtoken, ...)`\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'key_bind',
  request: { params: z.object({ PK: PKParamsSchema }), body: AuthentiqIDRequestBody },
  responses: {
    200: {
      description: 'Successfully updated',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'confirmed' }) })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Unknown key `unknown-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    409: {
      description: 'Already bound to another key `duplicate-hash`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const postKeyPKRoute = createRoute({
  method: 'post',
  path: '/key/{PK}',
  tags: ['key', 'post'],
  description:
    'update properties of an Authentiq ID.\n(not operational in v4; use PUT for now)\n\nv5: POST issuer-signed email & phone scopes in\na self-signed JWT\n\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'key_update',
  request: { params: z.object({ PK: PKParamsSchema }), body: AuthentiqIDRequestBody },
  responses: {
    200: {
      description: 'Successfully updated',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'confirmed' }) })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Unknown key `unknown-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const deleteKeyPKRoute = createRoute({
  method: 'delete',
  path: '/key/{PK}',
  tags: ['key', 'delete'],
  description: 'Revoke an Identity (Key) with a revocation secret',
  operationId: 'key_revoke',
  request: {
    params: z.object({ PK: PKParamsSchema }),
    query: z.object({
      secret: z
        .string()
        .openapi({
          param: {
            description: 'revokation secret',
            in: 'query',
            name: 'secret',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'done' }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Key not found / wrong code `auth-error`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Unknown key `unknown-key`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const headKeyPKRoute = createRoute({
  method: 'head',
  path: '/key/{PK}',
  tags: ['key', 'head'],
  description: 'HEAD info on Authentiq ID\n',
  request: { params: z.object({ PK: PKParamsSchema }) },
  responses: {
    200: { description: 'Key exists' },
    404: { description: 'Unknown key `unknown-key`', content: { '*/*': { schema: ErrorSchema } } },
    410: {
      description: 'Key is revoked `revoked-key`',
      content: { '*/*': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const postLoginRoute = createRoute({
  method: 'post',
  path: '/login',
  tags: ['login', 'post'],
  description: 'push sign-in request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'push_login_request',
  request: {
    query: z.object({
      callback: z
        .string()
        .openapi({
          param: {
            description: 'URI App will connect to',
            in: 'query',
            name: 'callback',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Push Token.',
      content: { 'application/jwt': { schema: PushTokenSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'sent' }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description:
        'Unauthorized for this callback audience `aud-error` or JWT should be self-signed `auth-error`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const postScopeRoute = createRoute({
  method: 'post',
  path: '/scope',
  tags: ['scope', 'post'],
  description:
    'scope verification request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'sign_request',
  request: {
    query: z.object({
      test: z
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
            description: 'test only mode, using test issuer',
            in: 'query',
            name: 'test',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Claims of scope',
      content: { 'application/jwt': { schema: ClaimsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              job: z.string().exactOptional().openapi({ description: '20-character ID' }),
              status: z.string().exactOptional().openapi({ description: 'waiting' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    429: {
      description: 'Too Many Requests on same address / number `rate-limit`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const getScopeJobRoute = createRoute({
  method: 'get',
  path: '/scope/{job}',
  tags: ['scope', 'get'],
  description: 'get the status / current content of a verification job',
  operationId: 'sign_retrieve',
  request: { params: z.object({ job: JobIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successful response (JWT)',
      content: {
        'application/json': {
          schema: z
            .object({
              exp: z.int().exactOptional(),
              field: z.string().exactOptional(),
              sub: z
                .string()
                .exactOptional()
                .openapi({ description: 'base64safe encoded public signing key' }),
            })
            .openapi({ title: 'JWT', required: [] }),
        },
        'application/jwt': {
          schema: z
            .object({
              exp: z.int().exactOptional(),
              field: z.string().exactOptional(),
              sub: z
                .string()
                .exactOptional()
                .openapi({ description: 'base64safe encoded public signing key' }),
            })
            .openapi({ title: 'JWT', required: [] }),
        },
      },
    },
    204: { description: 'Confirmed, waiting for signing' },
    404: {
      description: 'Job not found `unknown-job`',
      content: {
        'application/json': { schema: ErrorSchema },
        'application/jwt': { schema: ErrorSchema },
      },
    },
    default: ErrorResponseResponse,
  },
})

export const putScopeJobRoute = createRoute({
  method: 'put',
  path: '/scope/{job}',
  tags: ['scope', 'put'],
  description:
    'authority updates a JWT with its signature\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples\n',
  operationId: 'sign_update',
  request: { params: z.object({ job: JobIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully updated',
      content: {
        'application/jwt': {
          schema: z
            .object({
              jwt: z.string().exactOptional().openapi({ description: 'result is JWT or JSON??' }),
              status: z.string().exactOptional().openapi({ description: 'ready' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Job not found `unknown-job`',
      content: { 'application/jwt': { schema: ErrorSchema } },
    },
    409: {
      description: 'Job not confirmed yet `confirm-first`',
      content: { 'application/jwt': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const postScopeJobRoute = createRoute({
  method: 'post',
  path: '/scope/{job}',
  tags: ['scope', 'post'],
  description: 'this is a scope confirmation',
  operationId: 'sign_confirm',
  request: { params: z.object({ job: JobIDParamsSchema }) },
  responses: {
    202: {
      description: 'Successfully confirmed',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'confirmed' }) })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Confirmation error `auth-error`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    404: {
      description: 'Job not found `unknown-job`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    405: {
      description: 'JWT POSTed to scope `not-supported`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const deleteScopeJobRoute = createRoute({
  method: 'delete',
  path: '/scope/{job}',
  tags: ['scope', 'delete'],
  description: 'delete a verification job',
  operationId: 'sign_delete',
  request: { params: z.object({ job: JobIDParamsSchema }) },
  responses: {
    200: {
      description: 'Successfully deleted',
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().exactOptional().openapi({ description: 'done' }) })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Job not found `unknown-job`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})

export const headScopeJobRoute = createRoute({
  method: 'head',
  path: '/scope/{job}',
  tags: ['scope', 'head'],
  description: 'HEAD to get the status of a verification job',
  operationId: 'sign_retrieve_head',
  request: { params: z.object({ job: JobIDParamsSchema }) },
  responses: {
    200: { description: 'Confirmed and signed' },
    204: { description: 'Confirmed, waiting for signing' },
    404: {
      description: 'Job not found `unknown-job`',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    default: ErrorResponseResponse,
  },
})
