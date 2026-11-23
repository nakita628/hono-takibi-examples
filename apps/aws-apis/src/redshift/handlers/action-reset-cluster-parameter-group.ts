import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetClusterParameterGroupRoute,
  postActionResetClusterParameterGroupRoute,
} from '../routes'

export const getActionResetClusterParameterGroupRouteHandler: RouteHandler<
  typeof getActionResetClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetClusterParameterGroupRouteHandler: RouteHandler<
  typeof postActionResetClusterParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
