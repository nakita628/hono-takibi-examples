import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateNewStickerSetRoute } from '../routes'

const app = new OpenAPIHono()

export const createNewStickerSetHandler = app.openapi(postCreateNewStickerSetRoute, (c) => {
  throw new Error('Not implemented')
})
