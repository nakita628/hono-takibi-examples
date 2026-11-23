import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutRolePolicyRoute, postActionPutRolePolicyRoute } from '../routes'

export const getActionPutRolePolicyRouteHandler: RouteHandler<
  typeof getActionPutRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutRolePolicyRouteHandler: RouteHandler<
  typeof postActionPutRolePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
