import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetDesiredCapacityRoute, postActionSetDesiredCapacityRoute } from '../routes'

export const getActionSetDesiredCapacityRouteHandler: RouteHandler<
  typeof getActionSetDesiredCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetDesiredCapacityRouteHandler: RouteHandler<
  typeof postActionSetDesiredCapacityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
