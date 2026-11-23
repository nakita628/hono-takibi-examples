import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteGroupPolicyRoute, postActionDeleteGroupPolicyRoute } from '../routes'

export const getActionDeleteGroupPolicyRouteHandler: RouteHandler<
  typeof getActionDeleteGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteGroupPolicyRouteHandler: RouteHandler<
  typeof postActionDeleteGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
