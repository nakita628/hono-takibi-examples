import { OpenAPIHono } from '@hono/zod-openapi'
import { postAiAlphaSearchMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const aiAlphaSearchMessagesHandler = app.openapi(postAiAlphaSearchMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
