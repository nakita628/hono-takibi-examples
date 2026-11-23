import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetRolePolicyRoute, postActionGetRolePolicyRoute } from '../routes'

export const getActionGetRolePolicyRouteHandler: RouteHandler<
  typeof getActionGetRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetRolePolicyRouteHandler: RouteHandler<
  typeof postActionGetRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
