import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthValidateRoute, postAuthPollRoute, postAuthStartRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
