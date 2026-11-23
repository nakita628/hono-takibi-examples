import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListGroupPoliciesRoute, postActionListGroupPoliciesRoute } from '../routes'

export const getActionListGroupPoliciesRouteHandler: RouteHandler<
  typeof getActionListGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListGroupPoliciesRouteHandler: RouteHandler<
  typeof postActionListGroupPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
