import { createRoute, z } from '@hono/zod-openapi'

const ConnectionSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Xero identifier' }),
    tenantId: z.uuid().exactOptional().openapi({ description: 'Xero identifier of organisation' }),
    authEventId: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Identifier shared across connections authorised at the same time' }),
    tenantType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Xero tenant type (i.e. ORGANISATION, PRACTICE)' }),
    tenantName: z.string().exactOptional().openapi({ description: 'Xero tenant name' }),
    createdDateUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when the user connected this tenant to your app',
        'x-is-datetime': true,
        'x-php-format': '\\DateTime',
      }),
    updatedDateUtc: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the user most recently connected this tenant to your app. May differ to the created date if the user has disconnected and subsequently reconnected this tenant to your app.',
        'x-is-datetime': true,
        'x-php-format': '\\DateTime',
      }),
  })
  .openapi({ externalDocs: { url: 'http://developer.xero.com' }, required: [] })
  .openapi('Connection')

const RefreshTokenSchema = z
  .object({
    grant_type: z.string().exactOptional().openapi({ description: 'Xero grant type' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'refresh token provided during authentication flow' }),
    client_id: z.string().exactOptional().openapi({ description: 'client id for Xero app' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'client secret for Xero app 2' }),
  })
  .openapi({ externalDocs: { url: 'http://developer.xero.com' }, required: [] })
  .openapi('RefreshToken')

const AccessTokenSchema = z
  .object({
    id_token: z.string().exactOptional().openapi({ description: 'Xero unique identifier' }),
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'access token provided during authentication flow' }),
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'time in seconds until access token expires.',
      }),
    token_type: z.string().exactOptional().openapi({ description: 'type of token i.e. Bearer' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'token used to refresh an expired access token' }),
  })
  .openapi({ externalDocs: { url: 'http://developer.xero.com' }, required: [] })
  .openapi('AccessToken')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'For more information',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://login.xero.com/identity/connect/authorize',
      tokenUrl: 'https://identity.xero.com/connect/token',
      scopes: {
        email: 'Grant read-only access to your email',
        openid: 'Grant read-only access to your open id',
        profile: 'your profile information',
      },
    },
  },
}

export const getConnectionsRoute = createRoute({
  method: 'get',
  path: '/Connections',
  tags: ['identity'],
  summary: 'Retrieves the connections for this user',
  description: 'Override the base server url that include version',
  operationId: 'getConnections',
  request: {
    query: z.object({
      authEventId: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            required: false,
            name: 'authEventId',
            description: 'Filter by authEventId',
            example: '00000000-0000-0000-0000-000000000000',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success - return response of type Connections array with 0 to n Connection',
      content: {
        'application/json': {
          schema: z.array(ConnectionSchema),
          example:
            '[ { "id": "7cb59f93-2964-421d-bb5e-a0f7a4572a44", "tenantId": "fe79f7dd-b6d4-4a92-ba7b-538af6289c58", "tenantName": "Demo Company (NZ)", "tenantType": "ORGANISATION", "createdDateUtc": "2019-12-07T18:46:19.5165400", "updatedDateUtc": "2019-12-07T18:46:19.5187840" } ]',
        },
      },
    },
  },
  security: [{ OAuth2: [] }],
})

export const deleteConnectionsIdRoute = createRoute({
  method: 'delete',
  path: '/Connections/{id}',
  tags: ['identity'],
  summary: 'Deletes a connection for this user (i.e. disconnect a tenant)',
  description: 'Override the base server url that include version',
  operationId: 'deleteConnection',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            required: true,
            in: 'path',
            name: 'id',
            description: 'Unique identifier for retrieving single object',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success - connection has been deleted no content returned' },
    404: { description: 'Resource not found' },
  },
  security: [{ OAuth2: [] }],
})
