import { OpenAPIHono } from '@hono/zod-openapi'
import { postMessagesBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const messagesHandler = app.openapi(postMessagesBatchRoute, (c) => {
  throw new Error('Not implemented')
})
