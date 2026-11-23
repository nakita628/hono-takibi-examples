import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesMessageIdRoute, postMessagesMessageIdRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app
  .openapi(getMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
