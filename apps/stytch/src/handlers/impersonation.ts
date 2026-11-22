import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ImpersonationAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const impersonationHandler = app.openapi(postV1ImpersonationAuthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
