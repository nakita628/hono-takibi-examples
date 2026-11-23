import { OpenAPIHono } from '@hono/zod-openapi'
import { getModerationChatUserUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const moderationHandler = app.openapi(getModerationChatUserUserIdRoute, (c) => {
  throw new Error('Not implemented')
})
