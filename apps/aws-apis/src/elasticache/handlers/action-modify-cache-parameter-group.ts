import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyCacheParameterGroupRoute,
  postActionModifyCacheParameterGroupRoute,
} from '../routes'

export const getActionModifyCacheParameterGroupRouteHandler: RouteHandler<
  typeof getActionModifyCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCacheParameterGroupRouteHandler: RouteHandler<
  typeof postActionModifyCacheParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
