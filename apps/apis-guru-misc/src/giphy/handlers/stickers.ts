import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStickersRandomRoute,
  getStickersSearchRoute,
  getStickersTranslateRoute,
  getStickersTrendingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stickersHandler = app
  .openapi(getStickersRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStickersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStickersTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStickersTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
