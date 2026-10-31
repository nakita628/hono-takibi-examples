import { createRoute, z } from '@hono/zod-openapi'

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getIndexPhpAppsOauth2AuthorizeRoute = createRoute({
  method: 'get',
  path: '/index.php/apps/oauth2/authorize',
  tags: ['login_redirector'],
  summary: 'Authorize the user',
  operationId: 'login_redirector-authorize',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            name: 'client_id',
            in: 'query',
            description: 'Client ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      state: z
        .string()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description: 'State of the flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
      response_type: z
        .string()
        .openapi({
          param: {
            name: 'response_type',
            in: 'query',
            description: 'Response type for the flow',
            required: true,
            schema: { type: 'string' },
          },
        }),
      redirect_uri: z
        .string()
        .default('')
        .exactOptional()
        .openapi({
          param: {
            name: 'redirect_uri',
            in: 'query',
            description:
              'URI to redirect to after the flow (is only used for legacy ownCloud clients)',
            schema: { type: 'string', default: '' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Client not found', content: { 'text/html': { schema: z.string() } } },
    303: {
      description: 'Redirect to the login URL',
      headers: z.object({
        Location: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postIndexPhpAppsOauth2ApiV1TokenRoute = createRoute({
  method: 'post',
  path: '/index.php/apps/oauth2/api/v1/token',
  tags: ['oauth_api'],
  summary: 'Get a token',
  operationId: 'oauth_api-get-token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              grant_type: z
                .enum(['authorization_code', 'refresh_token'])
                .openapi({ description: 'Token type that should be granted' }),
              code: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Code of the flow' }),
              refresh_token: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Refresh token' }),
              client_id: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Client ID' }),
              client_secret: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Client secret' }),
            })
            .openapi({ required: ['grant_type'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Token returned',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string(),
              token_type: z.string(),
              expires_in: z
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
              refresh_token: z.string(),
              user_id: z.string(),
              'x.nc-gss.secondary_url': z.string().nullable().exactOptional(),
            })
            .openapi({
              required: ['access_token', 'token_type', 'expires_in', 'refresh_token', 'user_id'],
            }),
        },
      },
    },
    400: {
      description: 'Getting token is not possible',
      content: {
        'application/json': {
          schema: z.object({ error: z.string() }).openapi({ required: ['error'] }),
        },
      },
    },
    500: { description: '', content: { 'text/plain': { schema: z.string() } } },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})
