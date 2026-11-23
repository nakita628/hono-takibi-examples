import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateCacheParameterGroupRoute,
  postActionCreateCacheParameterGroupRoute,
} from '../routes'

export const getActionCreateCacheParameterGroupRouteHandler: RouteHandler<
  typeof getActionCreateCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateCacheParameterGroupRouteHandler: RouteHandler<
  typeof postActionCreateCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
