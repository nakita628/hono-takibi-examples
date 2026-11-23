import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetStickerSetRoute } from '../routes'

const app = new OpenAPIHono()

export const getStickerSetHandler = app.openapi(postGetStickerSetRoute, (c) => {
  throw new Error('Not implemented')
})
