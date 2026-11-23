import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrderFeedbackRoute, postV1OrderScreenRoute } from './routes'
import { postV1OrderFeedbackRouteHandler, postV1OrderScreenRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1OrderFeedbackRoute, postV1OrderFeedbackRouteHandler)
  .openapi(postV1OrderScreenRoute, postV1OrderScreenRouteHandler)

export default app
