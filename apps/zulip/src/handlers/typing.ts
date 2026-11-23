import { OpenAPIHono } from '@hono/zod-openapi'
import { postTypingRoute } from '../routes'

const app = new OpenAPIHono()

export const typingHandler = app.openapi(postTypingRoute, (c) => {
  throw new Error('Not implemented')
})
