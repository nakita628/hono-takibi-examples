import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUntagPolicyRoute, postActionUntagPolicyRoute } from '../routes'

export const getActionUntagPolicyRouteHandler: RouteHandler<
  typeof getActionUntagPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagPolicyRouteHandler: RouteHandler<
  typeof postActionUntagPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
