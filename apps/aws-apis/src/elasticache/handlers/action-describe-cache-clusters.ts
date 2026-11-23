import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheClustersRoute,
  postActionDescribeCacheClustersRoute,
} from '../routes'

export const getActionDescribeCacheClustersRouteHandler: RouteHandler<
  typeof getActionDescribeCacheClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheClustersRouteHandler: RouteHandler<
  typeof postActionDescribeCacheClustersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
