import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1B2bImpersonationAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const b2BImpersonationHandler = app.openapi(postV1B2bImpersonationAuthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
