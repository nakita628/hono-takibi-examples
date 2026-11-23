import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosGetExifRoute } from '../routes'

export const getRestMethodFlickrPhotosGetExifRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosGetExifRoute
> = async (c) => {
  throw new Error('Not implemented')
}
