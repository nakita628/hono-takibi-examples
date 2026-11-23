import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGifsGifIdRoute,
  getGifsRandomRoute,
  getGifsRoute,
  getGifsSearchRoute,
  getGifsTranslateRoute,
  getGifsTrendingRoute,
} from '../routes'

export const getGifsRouteHandler: RouteHandler<typeof getGifsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGifsRandomRouteHandler: RouteHandler<typeof getGifsRandomRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGifsSearchRouteHandler: RouteHandler<typeof getGifsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGifsTranslateRouteHandler: RouteHandler<typeof getGifsTranslateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGifsTrendingRouteHandler: RouteHandler<typeof getGifsTrendingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGifsGifIdRouteHandler: RouteHandler<typeof getGifsGifIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
