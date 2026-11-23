import { OpenAPIHono } from '@hono/zod-openapi'
import { postAddStickerToSetRoute } from '../routes'

const app = new OpenAPIHono()

export const addStickerToSetHandler = app.openapi(postAddStickerToSetRoute, (c) => {
  throw new Error('Not implemented')
})
