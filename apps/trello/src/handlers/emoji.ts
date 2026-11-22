import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmojiRoute } from '../routes'

const app = new OpenAPIHono()

export const emojiHandler = app.openapi(getEmojiRoute, (c) => {
  throw new Error('Not implemented')
})
