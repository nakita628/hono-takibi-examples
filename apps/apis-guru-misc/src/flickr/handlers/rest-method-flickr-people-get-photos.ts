import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPeopleGetPhotosRoute } from '../routes'

export const getRestMethodFlickrPeopleGetPhotosRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPeopleGetPhotosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
