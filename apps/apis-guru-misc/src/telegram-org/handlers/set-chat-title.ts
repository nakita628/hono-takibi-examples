import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatTitleRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatTitleHandler = app.openapi(postSetChatTitleRoute, (c) => {
  throw new Error('Not implemented')
})
