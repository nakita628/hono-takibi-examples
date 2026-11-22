import { OpenAPIHono } from '@hono/zod-openapi'
import { getConnectRoute, postOauth2TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app
  .openapi(getConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth2TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
