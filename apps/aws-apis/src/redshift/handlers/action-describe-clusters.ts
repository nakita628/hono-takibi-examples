import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeClustersRoute, postActionDescribeClustersRoute } from '../routes'

export const getActionDescribeClustersRouteHandler: RouteHandler<
  typeof getActionDescribeClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClustersRouteHandler: RouteHandler<
  typeof postActionDescribeClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
