import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachRolePolicyRoute, postActionDetachRolePolicyRoute } from '../routes'

export const getActionDetachRolePolicyRouteHandler: RouteHandler<
  typeof getActionDetachRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachRolePolicyRouteHandler: RouteHandler<
  typeof postActionDetachRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
