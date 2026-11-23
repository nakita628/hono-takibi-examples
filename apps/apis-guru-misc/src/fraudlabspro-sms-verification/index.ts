import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VerificationResultRoute, postV1VerificationSendRoute } from './routes'
import { getV1VerificationResultRouteHandler, postV1VerificationSendRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1VerificationResultRoute, getV1VerificationResultRouteHandler)
  .openapi(postV1VerificationSendRoute, postV1VerificationSendRouteHandler)

export default app
