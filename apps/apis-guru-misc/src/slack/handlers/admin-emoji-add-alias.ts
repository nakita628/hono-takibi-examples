import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminEmojiAddAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const adminEmojiAddAliasHandler = app.openapi(postAdminEmojiAddAliasRoute, (c) => {
  throw new Error('Not implemented')
})
