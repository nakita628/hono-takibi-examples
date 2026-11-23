import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestrictChatMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const restrictChatMemberHandler = app.openapi(postRestrictChatMemberRoute, (c) => {
  throw new Error('Not implemented')
})
