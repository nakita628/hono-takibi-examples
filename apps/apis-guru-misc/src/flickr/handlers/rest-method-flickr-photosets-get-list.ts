import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPhotosetsGetListRoute } from '../routes'

export const getRestMethodFlickrPhotosetsGetListRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPhotosetsGetListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
