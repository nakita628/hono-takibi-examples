import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthAuthorizeRoute, postOauthRevokeRoute, postOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authentication__OAuthHandler = app
  .openapi(getOauthAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
