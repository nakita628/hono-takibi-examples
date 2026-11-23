import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetDBClusterParameterGroupRoute,
  postActionResetDBClusterParameterGroupRoute,
} from '../routes'

export const getActionResetDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionResetDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetDBClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionResetDBClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
