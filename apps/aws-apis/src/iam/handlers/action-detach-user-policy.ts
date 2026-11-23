import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachUserPolicyRoute, postActionDetachUserPolicyRoute } from '../routes'

export const getActionDetachUserPolicyRouteHandler: RouteHandler<
  typeof getActionDetachUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachUserPolicyRouteHandler: RouteHandler<
  typeof postActionDetachUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
