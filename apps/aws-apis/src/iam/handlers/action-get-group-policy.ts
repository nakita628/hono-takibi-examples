import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetGroupPolicyRoute, postActionGetGroupPolicyRoute } from '../routes'

export const getActionGetGroupPolicyRouteHandler: RouteHandler<
  typeof getActionGetGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetGroupPolicyRouteHandler: RouteHandler<
  typeof postActionGetGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
