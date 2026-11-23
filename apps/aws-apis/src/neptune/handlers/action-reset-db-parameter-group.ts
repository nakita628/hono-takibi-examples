import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetDBParameterGroupRoute,
  postActionResetDBParameterGroupRoute,
} from '../routes'

export const getActionResetDBParameterGroupRouteHandler: RouteHandler<
  typeof getActionResetDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetDBParameterGroupRouteHandler: RouteHandler<
  typeof postActionResetDBParameterGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
