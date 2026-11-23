import type { RouteHandler } from '@hono/zod-openapi'
import type { getNewsfeedsBlogRoute, getNewsfeedsEngineeringRoute } from '../routes'

export const getNewsfeedsBlogRouteHandler: RouteHandler<typeof getNewsfeedsBlogRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNewsfeedsEngineeringRouteHandler: RouteHandler<
  typeof getNewsfeedsEngineeringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
