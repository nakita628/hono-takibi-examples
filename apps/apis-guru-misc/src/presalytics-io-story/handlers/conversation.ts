import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdMessagesRoute, postIdMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationHandler = app
  .openapi(getIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
