import { OpenAPIHono } from '@hono/zod-openapi'
import { postLoginRoute, postLogoutRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
