import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheParameterGroupsRoute,
  postActionDescribeCacheParameterGroupsRoute,
} from '../routes'

export const getActionDescribeCacheParameterGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeCacheParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheParameterGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeCacheParameterGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
