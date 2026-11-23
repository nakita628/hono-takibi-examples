import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteStickerFromSetRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteStickerFromSetHandler = app.openapi(postDeleteStickerFromSetRoute, (c) => {
  throw new Error('Not implemented')
})
