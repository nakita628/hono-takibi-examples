import { OpenAPIHono } from '@hono/zod-openapi'
import { postMessagesRoute, putMessagesMessageIDRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(postMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMessagesMessageIDRoute, (c) => {
    throw new Error('Not implemented')
  })
