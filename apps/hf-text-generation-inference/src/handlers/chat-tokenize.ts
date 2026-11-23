import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatTokenizeRoute } from '../routes'

const app = new OpenAPIHono()

export const chatTokenizeHandler = app.openapi(postChatTokenizeRoute, (c) => {
  throw new Error('Not implemented')
})
