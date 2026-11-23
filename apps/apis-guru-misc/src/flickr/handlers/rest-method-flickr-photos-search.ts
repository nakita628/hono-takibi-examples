import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosSearchRoute } from '../routes'

export const getRestMethodFlickrPhotosSearchRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
