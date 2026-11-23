import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrFavoritesGetListRoute } from '../routes'

export const getRestMethodFlickrFavoritesGetListRouteHandler: RouteHandler<
  typeof getRestMethodFlickrFavoritesGetListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
