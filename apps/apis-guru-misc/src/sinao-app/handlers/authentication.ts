import { OpenAPIHono } from '@hono/zod-openapi'
import { getRefreshRoute, postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
