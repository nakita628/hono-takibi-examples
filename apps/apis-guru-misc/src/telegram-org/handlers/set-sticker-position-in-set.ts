import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetStickerPositionInSetRoute } from '../routes'

const app = new OpenAPIHono()

export const setStickerPositionInSetHandler = app.openapi(postSetStickerPositionInSetRoute, (c) => {
  throw new Error('Not implemented')
})
