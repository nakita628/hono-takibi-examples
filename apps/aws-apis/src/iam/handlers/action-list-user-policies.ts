import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListUserPoliciesRoute, postActionListUserPoliciesRoute } from '../routes'

export const getActionListUserPoliciesRouteHandler: RouteHandler<
  typeof getActionListUserPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListUserPoliciesRouteHandler: RouteHandler<
  typeof postActionListUserPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
