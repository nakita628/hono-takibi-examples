import { OpenAPIHono } from '@hono/zod-openapi'
import { postAiAlphaSearchMessagesRoute } from './routes'
import { postAiAlphaSearchMessagesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postAiAlphaSearchMessagesRoute,
  postAiAlphaSearchMessagesRouteHandler,
)

export default app
