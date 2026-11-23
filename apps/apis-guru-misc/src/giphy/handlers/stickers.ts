import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStickersRandomRoute,
  getStickersSearchRoute,
  getStickersTranslateRoute,
  getStickersTrendingRoute,
} from '../routes'

export const getStickersRandomRouteHandler: RouteHandler<typeof getStickersRandomRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStickersSearchRouteHandler: RouteHandler<typeof getStickersSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getStickersTranslateRouteHandler: RouteHandler<
  typeof getStickersTranslateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStickersTrendingRouteHandler: RouteHandler<
  typeof getStickersTrendingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
