import { OpenAPIHono } from '@hono/zod-openapi'
import { getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const notetakerHandler = app.openapi(
  getNotetaker202609ConversationRecapObjectTypeIdObjectIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
