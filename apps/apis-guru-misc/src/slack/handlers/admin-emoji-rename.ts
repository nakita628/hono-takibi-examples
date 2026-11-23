import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminEmojiRenameRoute } from '../routes'

const app = new OpenAPIHono()

export const adminEmojiRenameHandler = app.openapi(postAdminEmojiRenameRoute, (c) => {
  throw new Error('Not implemented')
})
