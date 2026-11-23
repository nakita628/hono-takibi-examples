import { OpenAPIHono } from '@hono/zod-openapi'
import { postChatDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const chatDeleteHandler = app.openapi(postChatDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
