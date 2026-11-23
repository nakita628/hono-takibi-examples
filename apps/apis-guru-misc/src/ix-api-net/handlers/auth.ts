import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthRefreshRoute, postAuthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
