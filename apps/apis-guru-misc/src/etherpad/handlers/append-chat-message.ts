import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppendChatMessageRoute, postAppendChatMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const appendChatMessageHandler = app
  .openapi(getAppendChatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppendChatMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
