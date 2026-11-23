import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrPeopleGetInfoRoute } from '../routes'

export const getRestMethodFlickrPeopleGetInfoRouteHandler: RouteHandler<
  typeof getRestMethodFlickrPeopleGetInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
