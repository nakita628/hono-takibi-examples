import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteRolePolicyRoute, postActionDeleteRolePolicyRoute } from '../routes'

export const getActionDeleteRolePolicyRouteHandler: RouteHandler<
  typeof getActionDeleteRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRolePolicyRouteHandler: RouteHandler<
  typeof postActionDeleteRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
