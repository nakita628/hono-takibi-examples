import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetChatHeadRoute, postGetChatHeadRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatHeadHandler = app
  .openapi(getGetChatHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetChatHeadRoute, (c) => {
    throw new Error('Not implemented')
  })
