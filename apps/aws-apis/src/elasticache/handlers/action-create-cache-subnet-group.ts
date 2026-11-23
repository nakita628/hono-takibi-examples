import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCacheSubnetGroupRoute,
  postActionCreateCacheSubnetGroupRoute,
} from '../routes'

export const getActionCreateCacheSubnetGroupRouteHandler: RouteHandler<
  typeof getActionCreateCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCacheSubnetGroupRouteHandler: RouteHandler<
  typeof postActionCreateCacheSubnetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
