import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListRolePoliciesRoute, postActionListRolePoliciesRoute } from '../routes'

export const getActionListRolePoliciesRouteHandler: RouteHandler<
  typeof getActionListRolePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListRolePoliciesRouteHandler: RouteHandler<
  typeof postActionListRolePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
