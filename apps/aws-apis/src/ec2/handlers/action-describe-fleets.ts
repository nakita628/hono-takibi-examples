import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeFleetsRoute, postActionDescribeFleetsRoute } from '../routes'

export const getActionDescribeFleetsRouteHandler: RouteHandler<
  typeof getActionDescribeFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFleetsRouteHandler: RouteHandler<
  typeof postActionDescribeFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
