import { createRoute, z } from '@hono/zod-openapi'

const ApiKeyCookieSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'api_key',
  description:
    'An API key that will be supplied in a named cookie. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object',
}

const ApiKeyHeaderSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'X-API-KEY',
  description:
    'An API key that will be supplied in a named header. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object',
}

const ApiKeyQuerySecurityScheme = {
  type: 'apiKey',
  in: 'query',
  name: 'apiKey',
  description:
    'An API key that will be supplied in a named query parameter. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object',
}

const BasicSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    "Basic auth that takes a base64'd combination of `user:password`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#basic-authentication-sample",
}

const BearerSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#basic-authentication-sample',
}

const BearerJwtSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description:
    'A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. In this case, the format of the token is specified as JWT. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#jwt-bearer-sample',
}

const MutualTLSSecurityScheme = {
  type: 'mutualTLS',
  description:
    'Requires a specific mutual TLS certificate to use when making a HTTP request. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  flows: {
    authorizationCode: {
      authorizationUrl: 'http://example.com/oauth/dialog',
      tokenUrl: 'http://example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
    clientCredentials: {
      tokenUrl: 'http://example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
    implicit: {
      authorizationUrl: 'http://example.com/oauth/dialog',
      scopes: { 'write:things': 'Add things to your account' },
    },
    password: {
      tokenUrl: 'http://example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

const Oauth2AuthorizationCodeSecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow that only supports the `authorizationCode` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauth-flows-object',
  flows: {
    authorizationCode: {
      authorizationUrl: 'http://alt.example.com/oauth/dialog',
      tokenUrl: 'http://alt.example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

const Oauth2ClientCredentialsSecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow that only supports the `clientCredentials` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauth-flows-object',
  flows: {
    clientCredentials: {
      tokenUrl: 'http://alt.example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

const Oauth2ImplicitSecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow that only supports the `implicit` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauth-flows-object',
  flows: {
    implicit: {
      authorizationUrl: 'http://alt.example.com/oauth/dialog',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

const Oauth2PasswordSecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow that only supports the `password` flow type. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#oauth-flows-object',
  flows: {
    password: {
      tokenUrl: 'http://alt.example.com/oauth/token',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

const OpenIdConnectSecurityScheme = {
  type: 'openIdConnect',
  openIdConnectUrl: 'https://example.com/.well-known/openid-configuration',
  description:
    'OpenAPI authentication. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
}

export const getAnythingApiKeyRoute = createRoute({
  method: 'get',
  path: '/anything/apiKey',
  tags: ['API Key'],
  summary: 'Query parameter',
  description: '`apiKey` auth will be supplied within an `apiKey` query parameter.',
  responses: { 200: { description: 'OK' } },
  security: [{ apiKey_query: [] }],
})

export const putAnythingApiKeyRoute = createRoute({
  method: 'put',
  path: '/anything/apiKey',
  tags: ['API Key'],
  summary: 'Header',
  description: '`apiKey` auth will be supplied within an `X-API-KEY` header.',
  responses: { 200: { description: 'OK' } },
  security: [{ apiKey_header: [] }],
})

export const postAnythingApiKeyRoute = createRoute({
  method: 'post',
  path: '/anything/apiKey',
  tags: ['API Key'],
  summary: 'Cookie',
  description: '`apiKey` auth will be supplied within an `api_key` cookie.',
  responses: { 200: { description: 'OK' } },
  security: [{ apiKey_cookie: [] }],
})

export const postAnythingBasicRoute = createRoute({
  method: 'post',
  path: '/anything/basic',
  tags: ['HTTP'],
  summary: 'Basic',
  description:
    'Authentication credentials will be supplied within a `Basic` `Authorization` header.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#basic-authentication-sample',
  responses: { 200: { description: 'OK' } },
  security: [{ basic: [] }],
})

export const putAnythingBearerRoute = createRoute({
  method: 'put',
  path: '/anything/bearer',
  summary: 'Bearer (`jwt` format)',
  description:
    "Authentication credentials will be supplied within a `Bearer` `Authorization` header, but its data should be controlled as a JWT.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#basic-authentication-sample\n\n> ℹ️We currently do not support any special handling for this so they're handled as a standard `Bearer` authentication token.",
  responses: { 200: { description: 'OK' } },
  security: [{ bearer_jwt: [] }],
})

export const postAnythingBearerRoute = createRoute({
  method: 'post',
  path: '/anything/bearer',
  tags: ['HTTP'],
  summary: 'Bearer',
  description:
    'Authentication credentials will be supplied within a `Bearer` `Authorization` header.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#basic-authentication-sample',
  responses: { 200: { description: 'OK' } },
  security: [{ bearer: [] }],
})

export const postAnythingMutualTLSRoute = createRoute({
  method: 'post',
  path: '/anything/mutualTLS',
  tags: ['Mutual TLS'],
  summary: '`mutualTLS` auth',
  description: '🚧 This is not supported.',
  responses: { 200: { description: 'OK' } },
  security: [{ mutualTLS: [] }],
})

export const getAnythingOauth2Route = createRoute({
  method: 'get',
  path: '/anything/oauth2',
  tags: ['OAuth 2'],
  summary: 'General support (authorizationCode flow type)',
  description:
    '> ℹ️\n> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  responses: { 200: { description: 'OK' } },
  security: [{ oauth2_authorizationCode: ['write:things'] }],
})

export const putAnythingOauth2Route = createRoute({
  method: 'put',
  path: '/anything/oauth2',
  tags: ['OAuth 2'],
  summary: 'General support (clientCredentials flow type)',
  description:
    '> ℹ️\n> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  responses: { 200: { description: 'OK' } },
  security: [{ oauth2_clientCredentials: ['write:things'] }],
})

export const postAnythingOauth2Route = createRoute({
  method: 'post',
  path: '/anything/oauth2',
  tags: ['OAuth 2'],
  summary: 'General support (all flow types)',
  description:
    '> ℹ️\n> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  responses: { 200: { description: 'OK' } },
  security: [{ oauth2: ['write:things'] }],
})

export const deleteAnythingOauth2Route = createRoute({
  method: 'delete',
  path: '/anything/oauth2',
  tags: ['OAuth 2'],
  summary: 'General support (password flow type)',
  description:
    '> ℹ️\n> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  responses: { 200: { description: 'OK' } },
  security: [{ oauth2_password: ['write:things'] }],
})

export const patchAnythingOauth2Route = createRoute({
  method: 'patch',
  path: '/anything/oauth2',
  tags: ['OAuth 2'],
  summary: 'General support (implicit flow type)',
  description:
    '> ℹ️\n> We currently do not handle OAuth 2 authentication flows so if an operation has an `oauth2` requirement we assume that the user, or the projects JWT, has a qualified `bearer` token and will use that.\n\nhttps://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#fixed-fields-23',
  responses: { 200: { description: 'OK' } },
  security: [{ oauth2_implicit: ['write:things'] }],
})

export const postAnythingOpenIdConnectRoute = createRoute({
  method: 'post',
  path: '/anything/openIdConnect',
  tags: ['OpenID Connect'],
  summary: 'General support',
  description: '🚧 This is not supported.',
  responses: { 200: { description: 'OK' } },
  security: [{ openIdConnect: [] }],
})

export const postAnythingNoAuthRoute = createRoute({
  method: 'post',
  path: '/anything/no-auth',
  tags: ['Other'],
  summary: 'No auth requirements',
  description: 'This operation does not have any authentication requirements.',
  responses: { 200: { description: 'OK' } },
})

export const postStatus401Route = createRoute({
  method: 'post',
  path: '/status/401',
  tags: ['Other'],
  summary: 'Forced invalid authentication',
  description:
    'This endpoint requires an authentication header but making any request to it will forcefully return a 401 status code for invalid auth.',
  responses: { 401: { description: 'Unauthorized' } },
  security: [{ apiKey_header: [] }],
})
