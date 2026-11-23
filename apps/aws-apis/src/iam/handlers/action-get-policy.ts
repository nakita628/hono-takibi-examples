import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetPolicyRoute, postActionGetPolicyRoute } from '../routes'

export const getActionGetPolicyRouteHandler: RouteHandler<typeof getActionGetPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionGetPolicyRouteHandler: RouteHandler<
  typeof postActionGetPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
