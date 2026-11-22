import { OpenAPIHono } from '@hono/zod-openapi'
import { getLoginSsoRoute, getLogoutRoute, postLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(getLoginSsoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
