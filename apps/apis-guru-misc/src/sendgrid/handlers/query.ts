import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesMsgIdRoute, getMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const queryHandler = app
  .openapi(getMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesMsgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
