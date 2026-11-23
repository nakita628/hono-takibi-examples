import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminEmojiListRoute } from '../routes'

const app = new OpenAPIHono()

export const adminEmojiListHandler = app.openapi(getAdminEmojiListRoute, (c) => {
  throw new Error('Not implemented')
})
