import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosGetSizesRoute } from '../routes'

export const getRestMethodFlickrPhotosGetSizesRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosGetSizesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
