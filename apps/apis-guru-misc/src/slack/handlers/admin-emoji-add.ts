import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminEmojiAddRoute } from '../routes'

const app = new OpenAPIHono()

export const adminEmojiAddHandler = app.openapi(postAdminEmojiAddRoute, (c) => {
  throw new Error('Not implemented')
})
