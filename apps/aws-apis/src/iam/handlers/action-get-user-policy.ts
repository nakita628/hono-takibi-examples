import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetUserPolicyRoute, postActionGetUserPolicyRoute } from '../routes'

export const getActionGetUserPolicyRouteHandler: RouteHandler<
  typeof getActionGetUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetUserPolicyRouteHandler: RouteHandler<
  typeof postActionGetUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
