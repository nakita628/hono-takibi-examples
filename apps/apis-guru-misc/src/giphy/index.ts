import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGifsGifIdRoute,
  getGifsRandomRoute,
  getGifsRoute,
  getGifsSearchRoute,
  getGifsTranslateRoute,
  getGifsTrendingRoute,
  getStickersRandomRoute,
  getStickersSearchRoute,
  getStickersTranslateRoute,
  getStickersTrendingRoute,
} from './routes'
import {
  getGifsGifIdRouteHandler,
  getGifsRandomRouteHandler,
  getGifsRouteHandler,
  getGifsSearchRouteHandler,
  getGifsTranslateRouteHandler,
  getGifsTrendingRouteHandler,
  getStickersRandomRouteHandler,
  getStickersSearchRouteHandler,
  getStickersTranslateRouteHandler,
  getStickersTrendingRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGifsRoute, getGifsRouteHandler)
  .openapi(getGifsRandomRoute, getGifsRandomRouteHandler)
  .openapi(getGifsSearchRoute, getGifsSearchRouteHandler)
  .openapi(getGifsTranslateRoute, getGifsTranslateRouteHandler)
  .openapi(getGifsTrendingRoute, getGifsTrendingRouteHandler)
  .openapi(getGifsGifIdRoute, getGifsGifIdRouteHandler)
  .openapi(getStickersRandomRoute, getStickersRandomRouteHandler)
  .openapi(getStickersSearchRoute, getStickersSearchRouteHandler)
  .openapi(getStickersTranslateRoute, getStickersTranslateRouteHandler)
  .openapi(getStickersTrendingRoute, getStickersTrendingRouteHandler)

export default app
