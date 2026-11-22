import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionSetQueueAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetQueueAttributesHandler = app.openapi(
  postActionSetQueueAttributesRoute,
  (c) => {},
)
