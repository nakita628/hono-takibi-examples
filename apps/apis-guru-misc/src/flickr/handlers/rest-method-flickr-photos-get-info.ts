import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosGetInfoRoute } from '../routes'

export const getRestMethodFlickrPhotosGetInfoRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosGetInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
