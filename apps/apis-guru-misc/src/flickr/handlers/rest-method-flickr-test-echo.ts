import type { RouteHandler } from '@hono/zod-openapi'
import type { getRestMethodFlickrTestEchoRoute } from '../routes'

export const getRestMethodFlickrTestEchoRouteHandler: RouteHandler<
  typeof getRestMethodFlickrTestEchoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
