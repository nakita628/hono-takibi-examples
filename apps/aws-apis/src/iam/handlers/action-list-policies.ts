import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListPoliciesRoute, postActionListPoliciesRoute } from '../routes'

export const getActionListPoliciesRouteHandler: RouteHandler<
  typeof getActionListPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPoliciesRouteHandler: RouteHandler<
  typeof postActionListPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
