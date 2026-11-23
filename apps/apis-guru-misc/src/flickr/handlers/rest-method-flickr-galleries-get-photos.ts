import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrGalleriesGetPhotosRoute } from '../routes'

export const getRestMethodFlickrGalleriesGetPhotosRouteHandler: RouteHandler<
  typeof getRestMethodFlickrGalleriesGetPhotosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
