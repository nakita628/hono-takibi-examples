import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteChatStickerSetRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteChatStickerSetHandler = app.openapi(postDeleteChatStickerSetRoute, (c) => {
  throw new Error('Not implemented')
})
