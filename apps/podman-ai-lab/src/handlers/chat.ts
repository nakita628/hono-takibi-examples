import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiChatRoute } from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app.openapi(postApiChatRoute, (c) => {
  throw new Error('Not implemented')
})
