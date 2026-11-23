import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminEmojiRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const adminEmojiRemoveHandler = app.openapi(postAdminEmojiRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
