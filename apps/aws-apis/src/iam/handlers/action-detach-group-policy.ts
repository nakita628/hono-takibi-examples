import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachGroupPolicyRoute, postActionDetachGroupPolicyRoute } from '../routes'

export const getActionDetachGroupPolicyRouteHandler: RouteHandler<
  typeof getActionDetachGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachGroupPolicyRouteHandler: RouteHandler<
  typeof postActionDetachGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
