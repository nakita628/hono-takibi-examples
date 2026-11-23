import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetQLDBSessionSendCommandRoute } from './routes'
import { postXAmzTargetQLDBSessionSendCommandRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postXAmzTargetQLDBSessionSendCommandRoute,
  postXAmzTargetQLDBSessionSendCommandRouteHandler,
)

export default app
