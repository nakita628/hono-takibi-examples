import { OpenAPIHono } from '@hono/zod-openapi'
import { getStickersStickerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const stickersHandler = app.openapi(getStickersStickerIdRoute, (c) => {
  throw new Error('Not implemented')
})
