import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthIntrospectRoute, postOauthRevokeRoute, postOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(postOauthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthIntrospectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauthRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
