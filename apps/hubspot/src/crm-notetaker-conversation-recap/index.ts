import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute } from './routes'
import { getNotetaker202609ConversationRecapObjectTypeIdObjectIdRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute,
  getNotetaker202609ConversationRecapObjectTypeIdObjectIdRouteHandler,
)

export default app
