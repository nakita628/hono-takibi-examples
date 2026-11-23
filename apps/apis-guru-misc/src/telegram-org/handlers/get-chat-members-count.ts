import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetChatMembersCountRoute } from '../routes'

const app = new OpenAPIHono()

export const getChatMembersCountHandler = app.openapi(postGetChatMembersCountRoute, (c) => {
  throw new Error('Not implemented')
})
