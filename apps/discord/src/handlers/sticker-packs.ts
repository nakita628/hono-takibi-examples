import { OpenAPIHono } from '@hono/zod-openapi'
import { getStickerPacksPackIdRoute, getStickerPacksRoute } from '../routes'

const app = new OpenAPIHono()

export const stickerPacksHandler = app
  .openapi(getStickerPacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStickerPacksPackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
