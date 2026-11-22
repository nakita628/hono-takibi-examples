import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1VerificationTokensGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const verificationTokensHandler = app.openapi(postV1VerificationTokensGenerateRoute, (c) => {
  throw new Error('Not implemented')
})
