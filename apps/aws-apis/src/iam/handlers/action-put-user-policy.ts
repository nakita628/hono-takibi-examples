import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutUserPolicyRoute, postActionPutUserPolicyRoute } from '../routes'

export const getActionPutUserPolicyRouteHandler: RouteHandler<
  typeof getActionPutUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutUserPolicyRouteHandler: RouteHandler<
  typeof postActionPutUserPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
