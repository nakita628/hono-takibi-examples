import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetChatMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatMemberHandler = app.openapi(postGetChatMemberRoute, (c) => {
  throw new Error('Not implemented')
})
