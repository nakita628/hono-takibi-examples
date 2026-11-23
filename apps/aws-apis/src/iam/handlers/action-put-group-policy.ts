import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutGroupPolicyRoute, postActionPutGroupPolicyRoute } from '../routes'

export const getActionPutGroupPolicyRouteHandler: RouteHandler<
  typeof getActionPutGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutGroupPolicyRouteHandler: RouteHandler<
  typeof postActionPutGroupPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
