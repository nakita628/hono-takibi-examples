import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListPolicyVersionsRoute, postActionListPolicyVersionsRoute } from '../routes'

export const getActionListPolicyVersionsRouteHandler: RouteHandler<
  typeof getActionListPolicyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListPolicyVersionsRouteHandler: RouteHandler<
  typeof postActionListPolicyVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
