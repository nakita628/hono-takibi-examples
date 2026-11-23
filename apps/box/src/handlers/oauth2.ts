import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauth2RevokeRoute, postOauth2TokenRefreshRoute, postOauth2TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(postOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2TokenRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2RevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
