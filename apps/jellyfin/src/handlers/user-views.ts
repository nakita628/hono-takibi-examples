import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserViewsGroupingOptionsRoute, getUserViewsRoute } from '../routes'

export const getUserViewsRouteHandler: RouteHandler<typeof getUserViewsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserViewsGroupingOptionsRouteHandler: RouteHandler<
  typeof getUserViewsGroupingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
