import { OpenAPIHono } from '@hono/zod-openapi'
import { postSendStickerRoute } from '../routes'

const app = new OpenAPIHono()

export const sendStickerHandler = app.openapi(postSendStickerRoute, (c) => {
  throw new Error('Not implemented')
})
