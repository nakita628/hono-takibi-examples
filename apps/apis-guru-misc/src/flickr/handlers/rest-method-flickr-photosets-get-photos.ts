import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosetsGetPhotosRoute } from '../routes'

export const getRestMethodFlickrPhotosetsGetPhotosRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosetsGetPhotosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
