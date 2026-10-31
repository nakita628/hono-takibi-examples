import { createRoute, z } from '@hono/zod-openapi'

const ApiKeyCookieSecurityScheme = {
  type: 'apiKey',
  in: 'cookie',
  name: 'api_key',
  description:
    'An API key that will be supplied in a named cookie. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-object',
}

const ApiKeyHeaderSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'X-API-KEY',
  description:
    'An API key that will be supplied in a named header. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-objec',
}

const ApiKeyQuerySecurityScheme = {
  type: 'apiKey',
  in: 'query',
  name: 'apiKey',
  description:
    'An API key that will be supplied in a named query parameter. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#security-scheme-objec',
}

const BasicSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    "Basic auth that takes a base64'd combination of `user:password`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample",
}

const BearerSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'A bearer token that will be supplied within an `Authentication` header as `bearer <token>`. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#basic-authentication-sample',
}

const BearerJwtSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'JWT',
  description:
    'A special kind of bearer token that will be supplied within an `Authentication` header as `<bearerFormat> <token>` (and in this case `jwt <token>`). https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#jwt-bearer-sample',
}

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description:
    'An OAuth 2 security flow. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23',
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

const Oauth2AlternateSecurityScheme = {
  type: 'oauth2',
  description:
    'An alternate OAuth 2 security flow. Functions identially to the other `oauth2` scheme, just with alternate URLs to authenticate against. https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#fixed-fields-23',
  flows: {
    implicit: {
      authorizationUrl: 'http://alt.example.com/oauth/dialog',
      scopes: { 'write:things': 'Add things to your account' },
    },
  },
}

export const postAnythingAndRoute = createRoute({
  method: 'post',
  path: '/anything/and',
  summary: 'Multiple forms of auth are required (&&)',
  responses: { 401: { description: 'Unauthorized' } },
  security: [{ apiKey_header: [], basic: [], oauth2: ['write:things'] }],
})

export const postAnythingOrRoute = createRoute({
  method: 'post',
  path: '/anything/or',
  summary: 'Two forms of auth can be used, only one is required (||)',
  responses: { 401: { description: 'Unauthorized' } },
  security: [{ oauth2: ['write:things'] }, { apiKey_header: [] }],
})

export const postAnythingAndOrRoute = createRoute({
  method: 'post',
  path: '/anything/and-or',
  summary:
    'Two security flows are present, one of which has multiple forms of required auth (&& ||)',
  responses: { 401: { description: 'Unauthorized' } },
  security: [
    { oauth2: ['write:things'], apiKey_header: [] },
    { oauth2_alternate: ['write:things'] },
  ],
})

export const postAnythingManyAndOrRoute = createRoute({
  method: 'post',
  path: '/anything/many-and-or',
  summary: 'Many security flows are present, each with multiple forms of required auth (&& ||)',
  responses: { 401: { description: 'Unauthorized' } },
  security: [
    { oauth2: [], basic: [] },
    { bearer: [], bearer_jwt: [] },
    { bearer_jwt: [] },
    { basic: [] },
    { basic: [], bearer: [] },
    { apiKey_cookie: [], apiKey_header: [], apiKey_query: [] },
  ],
})
