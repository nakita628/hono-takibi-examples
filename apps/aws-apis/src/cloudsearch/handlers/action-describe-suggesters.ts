import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeSuggestersRoute, postActionDescribeSuggestersRoute } from '../routes'

export const getActionDescribeSuggestersRouteHandler: RouteHandler<
  typeof getActionDescribeSuggestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSuggestersRouteHandler: RouteHandler<
  typeof postActionDescribeSuggestersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
