import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetStickerSetThumbRoute } from '../routes'

const app = new OpenAPIHono()

export const setStickerSetThumbHandler = app.openapi(postSetStickerSetThumbRoute, (c) => {
  throw new Error('Not implemented')
})
