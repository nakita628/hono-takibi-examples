import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionGetQueueAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetQueueAttributesHandler = app.openapi(
  postActionGetQueueAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
