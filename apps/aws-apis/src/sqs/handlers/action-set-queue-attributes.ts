import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionSetQueueAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetQueueAttributesHandler = app.openapi(
  postActionSetQueueAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
