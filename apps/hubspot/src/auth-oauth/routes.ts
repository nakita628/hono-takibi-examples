import { createRoute, z } from '@hono/zod-openapi'

const AccessTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({
        description: 'A string representing the access token that allows access to the API.',
        example: null,
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer in int64 format indicating the duration in seconds until the access token expires.',
        example: null,
      }),
    hub_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the unique identifier of the HubSpot account (hub) associated with the token.',
        example: null,
      }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the ID token, which is an optional part of the response.',
        example: null,
      }),
    refresh_token: z
      .string()
      .openapi({
        description:
          'A string representing the refresh token, which can be used to obtain a new access token.',
        example: null,
      }),
    scopes: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'An array of strings specifying the scopes that are granted with the access token.',
        example: null,
      }),
    token_type: z
      .string()
      .openapi({ description: 'A string indicating the type of token issued.', example: null }),
    token_use: z
      .literal('access_token')
      .default('access_token')
      .openapi({
        description:
          "Indicates the usage of the token, which is 'access_token' by default. It is a string with a fixed value of 'access_token'.",
        example: null,
      }),
    user_id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'An integer representing the unique identifier of the user associated with the token.',
        example: null,
      }),
  })
  .openapi({
    required: ['access_token', 'expires_in', 'refresh_token', 'token_type', 'token_use'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('AccessTokenResponse')

const ClientCredentialsTokenResponseSchema = z
  .object({
    access_token: z
      .string()
      .openapi({ description: 'A string representing the access token issued.', example: null }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer indicating the number of seconds until the token expires, in int64 format.',
        example: null,
      }),
    hub_id: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the HubSpot account ID associated with the token.',
        example: null,
      }),
    id_token: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the ID token, if applicable.',
        example: null,
      }),
    scopes: z
      .array(z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'An array of strings representing the scopes granted by the token.',
        example: null,
      }),
    token_type: z
      .string()
      .openapi({ description: 'A string indicating the type of the token.', example: null }),
    token_use: z
      .literal('client_credentials')
      .default('client_credentials')
      .openapi({
        description: "Indicates the usage of the token, which is 'client_credentials' by default.",
        example: null,
      }),
    user_id: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'An integer representing the user ID associated with the token.',
        example: null,
      }),
  })
  .openapi({
    required: ['access_token', 'expires_in', 'token_type', 'token_use'],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('ClientCredentialsTokenResponse')

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const SignedAccessTokenSchema = z
  .object({
    appId: z
      .int32()
      .openapi({
        description: 'An integer identifying the application that issued the token.',
        example: null,
      }),
    appInstallId: z
      .string()
      .openapi({
        description:
          'A string identifying the installation instance of the application associated with the token.',
        example: null,
      }),
    audience: z
      .string()
      .openapi({
        description: 'A string representing the intended audience for the token.',
        example: null,
      }),
    expiresAt: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer representing the expiration time of the token, in Unix timestamp format.',
        example: null,
      }),
    hubId: z
      .int32()
      .openapi({
        description: 'An integer identifying the HubSpot account associated with the token.',
        example: null,
      }),
    hublet: z
      .string()
      .openapi({
        description: 'A string indicating the specific HubSpot region or cluster.',
        example: null,
      }),
    installingUserId: z
      .int32()
      .openapi({
        description:
          'An integer identifying the user who installed the application associated with the token.',
        example: null,
      }),
    isPrivateDistribution: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the token is for a private distribution of the application.',
        example: null,
      }),
    isServiceAccount: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the token is for a service account.',
        example: null,
      }),
    isUserLevel: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the token is associated with a user-level scope.',
        example: null,
      }),
    newSignature: z
      .string()
      .openapi({
        description: 'A string representing a new cryptographic signature for the token.',
        example: null,
      }),
    scopeToScopeGroupPks: z
      .string()
      .openapi({
        description: 'A string mapping scopes to their respective scope group primary keys.',
        example: null,
      }),
    scopes: z
      .string()
      .openapi({
        description: 'A string detailing the permissions granted by the token.',
        example: null,
      }),
    signature: z
      .string()
      .openapi({
        description: 'A string representing the cryptographic signature of the token.',
        example: null,
      }),
    trialScopeToScopeGroupPks: z
      .string()
      .openapi({
        description: 'A string mapping trial scopes to their respective scope group primary keys.',
        example: null,
      }),
    trialScopes: z
      .string()
      .openapi({
        description: 'A string detailing the trial permissions granted by the token.',
        example: null,
      }),
    userId: z
      .int32()
      .openapi({
        description: 'An integer identifying the user associated with the token.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'appId',
      'appInstallId',
      'audience',
      'expiresAt',
      'hubId',
      'hublet',
      'installingUserId',
      'isPrivateDistribution',
      'isServiceAccount',
      'isUserLevel',
      'newSignature',
      'scopeToScopeGroupPks',
      'scopes',
      'signature',
      'trialScopeToScopeGroupPks',
      'trialScopes',
      'userId',
    ],
    example: null,
  })
  .openapi('SignedAccessToken')

const PublicAccessTokenInfoResponseSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the token is currently active.',
        example: null,
      }),
    app_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the application associated with the token.',
        example: null,
      }),
    client_id: z
      .string()
      .openapi({
        description: 'A string representing the client ID associated with the token.',
        example: null,
      }),
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'An integer in int64 format representing the time in seconds until the token expires.',
        example: null,
      }),
    hub_domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the domain of the HubSpot account associated with the token.',
        example: null,
      }),
    hub_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the HubSpot account (hub) associated with the token.',
        example: null,
      }),
    is_private_distribution: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the token is for private distribution.',
        example: null,
      }),
    scopes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description:
          'An array of strings representing the scopes (permissions) granted to the token.',
        example: null,
      }),
    signed_access_token: SignedAccessTokenSchema,
    token: z
      .string()
      .openapi({ description: 'A string representing the token itself.', example: null }),
    token_type: z
      .string()
      .openapi({ description: 'A string representing the type of the token.', example: null }),
    token_use: z
      .literal('access_token')
      .default('access_token')
      .openapi({
        description: "A string indicating the use of the token, which defaults to 'access_token'.",
        example: null,
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the username associated with the token.',
        example: null,
      }),
    user_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the user associated with the token.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'active',
      'app_id',
      'client_id',
      'expires_in',
      'hub_id',
      'is_private_distribution',
      'scopes',
      'signed_access_token',
      'token',
      'token_type',
      'token_use',
      'user_id',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicAccessTokenInfoResponse')

const PublicRefreshTokenInfoResponseSchema = z
  .object({
    active: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the token is currently active.',
        example: null,
      }),
    app_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the application associated with the token.',
        example: null,
      }),
    client_id: z
      .string()
      .openapi({
        description:
          'A string representing the unique identifier of the client that requested the token.',
        example: null,
      }),
    hub_domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing the domain of the HubSpot account associated with the token.',
        example: null,
      }),
    hub_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the HubSpot account associated with the token.',
        example: null,
      }),
    scopes: z
      .array(z.string().openapi({ example: null }))
      .openapi({
        description: 'An array of strings representing the scopes associated with the token.',
        example: null,
      }),
    token: z
      .string()
      .openapi({ description: 'The string representation of the refresh token.', example: null }),
    token_type: z
      .string()
      .openapi({ description: 'A string indicating the type of the token.', example: null }),
    token_use: z
      .literal('refresh_token')
      .default('refresh_token')
      .openapi({
        description: "Indicates the use of the token, which is 'refresh_token' by default.",
        example: null,
      }),
    user: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string representing the user associated with the token.',
        example: null,
      }),
    user_id: z
      .int32()
      .openapi({
        description:
          'An integer representing the unique identifier of the user associated with the token.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'active',
      'app_id',
      'client_id',
      'hub_id',
      'scopes',
      'token',
      'token_type',
      'token_use',
      'user_id',
    ],
    example: null,
    'x-hubspot-sub-type-impl': true,
  })
  .openapi('PublicRefreshTokenInfoResponse')

const TokenInfoResponseBaseIFSchema = z
  .xor([PublicAccessTokenInfoResponseSchema, PublicRefreshTokenInfoResponseSchema])
  .openapi({ example: null })
  .openapi('TokenInfoResponseBaseIF')

const TokenResponseIFSchema = z
  .xor([AccessTokenResponseSchema, ClientCredentialsTokenResponseSchema])
  .openapi({ example: null })
  .openapi('TokenResponseIF')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: {},
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const postOauth202609TokenRoute = createRoute({
  method: 'post',
  path: '/oauth/2026-09/token',
  tags: ['Advanced'],
  summary: 'OAuth token endpoint',
  description: 'Authenticates a client and returns access and refresh tokens.',
  operationId: 'post-/oauth/2026-09/token_/oauth/v3/token',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              assertion: z.string().exactOptional().openapi({ example: null }),
              client_assertion: z.string().exactOptional().openapi({ example: null }),
              client_assertion_type: z.string().exactOptional().openapi({ example: null }),
              client_id: z.string().exactOptional().openapi({ example: null }),
              client_secret: z.string().exactOptional().openapi({ example: null }),
              code: z.string().exactOptional().openapi({ example: null }),
              code_verifier: z.string().exactOptional().openapi({ example: null }),
              grant_type: z
                .enum([
                  'authorization_code',
                  'client_credentials',
                  'refresh_token',
                  'urn:ietf:params:oauth:grant-type:jwt-bearer',
                ])
                .exactOptional()
                .openapi({ example: null }),
              redirect_uri: z.string().exactOptional().openapi({ example: null }),
              refresh_token: z.string().exactOptional().openapi({ example: null }),
              scope: z.string().exactOptional().openapi({ example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TokenResponseIFSchema, example: null } },
    },
    default: ErrorResponse,
  },
})

export const postOauth202609TokenIntrospectRoute = createRoute({
  method: 'post',
  path: '/oauth/2026-09/token/introspect',
  tags: ['Advanced'],
  summary: 'Token introspection endpoint',
  description: 'Returns validity and metadata for access and refresh tokens.',
  operationId: 'post-/oauth/2026-09/token/introspect_/oauth/v3/token/introspect',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ example: null }),
              client_secret: z.string().exactOptional().openapi({ example: null }),
              token: z.string().exactOptional().openapi({ example: null }),
              token_type_hint: z.string().exactOptional().openapi({ example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: TokenInfoResponseBaseIFSchema, example: null } },
    },
    default: ErrorResponse,
  },
})

export const postOauth202609TokenRevokeRoute = createRoute({
  method: 'post',
  path: '/oauth/2026-09/token/revoke',
  tags: ['Advanced'],
  summary: 'Token Revocation endpoint',
  description: 'Deletes/Revokes provided Refresh Token',
  operationId: 'post-/oauth/2026-09/token/revoke_/oauth/v3/token/revoke',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string().exactOptional().openapi({ example: null }),
              client_secret: z.string().exactOptional().openapi({ example: null }),
              token: z.string().exactOptional().openapi({ example: null }),
              token_type_hint: z.string().exactOptional().openapi({ example: null }),
            })
            .openapi({ example: null, required: [] }),
          example: null,
        },
      },
    },
  },
  responses: { default: ErrorResponse },
})
