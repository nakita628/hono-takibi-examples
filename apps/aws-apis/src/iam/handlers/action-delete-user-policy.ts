import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteUserPolicyRoute, postActionDeleteUserPolicyRoute } from '../routes'

export const getActionDeleteUserPolicyRouteHandler: RouteHandler<
  typeof getActionDeleteUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteUserPolicyRouteHandler: RouteHandler<
  typeof postActionDeleteUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
