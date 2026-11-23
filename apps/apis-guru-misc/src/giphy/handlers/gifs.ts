import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGifsGifIdRoute,
  getGifsRandomRoute,
  getGifsRoute,
  getGifsSearchRoute,
  getGifsTranslateRoute,
  getGifsTrendingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gifsHandler = app
  .openapi(getGifsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGifsRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGifsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGifsTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGifsTrendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGifsGifIdRoute, (c) => {
    throw new Error('Not implemented')
  })
