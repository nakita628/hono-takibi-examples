import { OpenAPIHono } from '@hono/zod-openapi'
import { postConversationsSetPurposeRoute } from '../routes'

const app = new OpenAPIHono()

export const conversationsSetPurposeHandler = app.openapi(postConversationsSetPurposeRoute, (c) => {
  throw new Error('Not implemented')
})
