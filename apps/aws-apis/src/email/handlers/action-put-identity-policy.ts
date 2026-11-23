import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutIdentityPolicyRoute, postActionPutIdentityPolicyRoute } from '../routes'

export const getActionPutIdentityPolicyRouteHandler: RouteHandler<
  typeof getActionPutIdentityPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutIdentityPolicyRouteHandler: RouteHandler<
  typeof postActionPutIdentityPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
