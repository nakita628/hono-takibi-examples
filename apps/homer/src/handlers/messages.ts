import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesMessageIdDecodedRoute, getMessagesMessageIdRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMessageIdDecodedRoute, (c) => {
    throw new Error('Not implemented')
  })
