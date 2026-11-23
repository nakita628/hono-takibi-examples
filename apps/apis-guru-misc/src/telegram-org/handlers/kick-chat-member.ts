import { OpenAPIHono } from '@hono/zod-openapi'
import { postKickChatMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const kickChatMemberHandler = app.openapi(postKickChatMemberRoute, (c) => {
  throw new Error('Not implemented')
})
