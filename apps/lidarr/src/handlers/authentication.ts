import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogoutRoute, postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
