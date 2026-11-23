import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeCacheSubnetGroupsRoute,
  postActionDescribeCacheSubnetGroupsRoute,
} from '../routes'

export const getActionDescribeCacheSubnetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeCacheSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeCacheSubnetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeCacheSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
