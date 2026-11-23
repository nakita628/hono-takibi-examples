import type { RouteHandler } from '@hono/zod-openapi'
import type { getScalingPoliciesRoute, getScalingPolicyPolicyIDRoute } from '../routes'

export const getScalingPoliciesRouteHandler: RouteHandler<typeof getScalingPoliciesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getScalingPolicyPolicyIDRouteHandler: RouteHandler<
  typeof getScalingPolicyPolicyIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
