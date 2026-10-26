import { createRoute, z } from '@hono/zod-openapi'

const AttachModuleResponseSchema = z
  .object({
    bot_id: z.string().openapi({ description: 'User ID of the bot on the LINE Official Account.' }),
    scopes: z
      .array(z.string())
      .openapi({ description: 'Permissions (scope) granted by the LINE Official Account admin.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider',
    },
    description: 'Attach by operation of the module channel provider',
    required: ['bot_id', 'scopes'],
  })
  .openapi('AttachModuleResponse')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postModuleAuthV1TokenRoute = createRoute({
  method: 'post',
  path: '/module/auth/v1/token',
  tags: ['line-module-attach'],
  description: 'Attach by operation of the module channel provider',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider',
  },
  operationId: 'attachModule',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              grant_type: z
                .string()
                .openapi({ description: 'authorization_code', example: 'authorization_code' }),
              code: z
                .string()
                .openapi({ description: 'Authorization code received from the LINE Platform.' }),
              redirect_uri: z
                .string()
                .openapi({
                  description:
                    'Specify the redirect_uri specified in the URL for authentication and authorization.',
                }),
              code_verifier: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specify when using PKCE (Proof Key for Code Exchange) defined in the OAuth 2.0 extension specification as a countermeasure against authorization code interception attacks.',
                }),
              client_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Instead of using Authorization header, you can use this parameter to specify the channel ID of the module channel.\nYou can find the channel ID of the module channel in the LINE Developers Console.\n',
                }),
              client_secret: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Instead of using Authorization header, you can use this parameter to specify the channel secret of the module channel.\nYou can find the channel secret of the module channel in the LINE Developers Console.\n',
                }),
              region: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you specified a value for region in the URL for authentication and authorization, specify the same value.\n',
                }),
              basic_search_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you specified a value for basic_search_id in the URL for authentication and authorization, specify the same value.',
                }),
              scope: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you specified a value for scope in the URL for authentication and authorization, specify the same value.',
                }),
              brand_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you specified a value for brand_type in the URL for authentication and authorization, specify the same value.',
                }),
            })
            .openapi({
              description: 'request of the attachModule',
              required: ['grant_type', 'code', 'redirect_uri'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: AttachModuleResponseSchema,
          example: {
            bot_id: 'U45c5c51f0050ef0f0ee7261d57fd3c56',
            scopes: ['message:send', 'message:receive'],
          },
        },
      },
    },
  },
})
