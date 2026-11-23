import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmojiListRoute } from '../routes'

const app = new OpenAPIHono()

export const emojiListHandler = app.openapi(getEmojiListRoute, (c) => {
  throw new Error('Not implemented')
})
