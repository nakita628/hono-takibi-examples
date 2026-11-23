import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetPolicyVersionRoute, postActionGetPolicyVersionRoute } from '../routes'

export const getActionGetPolicyVersionRouteHandler: RouteHandler<
  typeof getActionGetPolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetPolicyVersionRouteHandler: RouteHandler<
  typeof postActionGetPolicyVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
