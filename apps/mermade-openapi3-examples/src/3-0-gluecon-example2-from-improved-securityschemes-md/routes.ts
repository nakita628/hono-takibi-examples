import { z } from '@hono/zod-openapi'

const MyOauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'https://example.com/api/oauth/dialog',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
    authorizationCode: {
      authorizationUrl: 'https://example.com/api/oauth/dialog',
      tokenUrl: 'https://example.com/api/oauth/token',
      refreshUrl: 'https://example.com/api/oauth/refresh',
      scopes: { 'write:pets': 'modify pets in your account', 'read:pets': 'read your pets' },
    },
  },
}

const MyOpenIdConnectSecurityScheme = {
  type: 'openIdConnect',
  openIdConnectUrl: 'https://example.com/.well-known/openid-connect',
}
