import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(
  getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
