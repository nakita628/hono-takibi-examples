import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnbanChatMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const unbanChatMemberHandler = app.openapi(postUnbanChatMemberRoute, (c) => {
  throw new Error('Not implemented')
})
