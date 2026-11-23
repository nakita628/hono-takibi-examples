import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCacheSubnetGroupRoute,
  postActionDeleteCacheSubnetGroupRoute,
} from '../routes'

export const getActionDeleteCacheSubnetGroupRouteHandler: RouteHandler<
  typeof getActionDeleteCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCacheSubnetGroupRouteHandler: RouteHandler<
  typeof postActionDeleteCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
