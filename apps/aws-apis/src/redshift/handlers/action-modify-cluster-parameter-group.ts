import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterParameterGroupRoute,
  postActionModifyClusterParameterGroupRoute,
} from '../routes'

export const getActionModifyClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionModifyClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionModifyClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
