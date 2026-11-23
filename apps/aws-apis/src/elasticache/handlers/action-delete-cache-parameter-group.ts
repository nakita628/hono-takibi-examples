import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteCacheParameterGroupRoute,
  postActionDeleteCacheParameterGroupRoute,
} from '../routes'

export const getActionDeleteCacheParameterGroupRouteHandler: RouteHandler<
  typeof getActionDeleteCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCacheParameterGroupRouteHandler: RouteHandler<
  typeof postActionDeleteCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
