import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthLogoutRoute, postAuthOauthValidateRoute, postAuthRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuthOauthValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
