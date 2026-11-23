import { OpenAPIHono } from '@hono/zod-openapi'
import { postPromoteChatMemberRoute } from '../routes'

const app = new OpenAPIHono()

export const promoteChatMemberHandler = app.openapi(postPromoteChatMemberRoute, (c) => {
  throw new Error('Not implemented')
})
