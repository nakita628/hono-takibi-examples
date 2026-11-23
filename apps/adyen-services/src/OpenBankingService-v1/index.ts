import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountVerificationReportsCodeRoute,
  postAccountVerificationRoutesRoute,
} from './routes'
import {
  getAccountVerificationReportsCodeRouteHandler,
  postAccountVerificationRoutesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountVerificationReportsCodeRoute, getAccountVerificationReportsCodeRouteHandler)
  .openapi(postAccountVerificationRoutesRoute, postAccountVerificationRoutesRouteHandler)

export default app
