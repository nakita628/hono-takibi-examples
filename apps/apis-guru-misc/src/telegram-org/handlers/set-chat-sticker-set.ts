import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetChatStickerSetRoute } from '../routes'

const app = new OpenAPIHono()

export const setChatStickerSetHandler = app.openapi(postSetChatStickerSetRoute, (c) => {
  throw new Error('Not implemented')
})
