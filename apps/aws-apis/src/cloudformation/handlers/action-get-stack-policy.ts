import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetStackPolicyRoute, postActionGetStackPolicyRoute } from '../routes'

export const getActionGetStackPolicyRouteHandler: RouteHandler<
  typeof getActionGetStackPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetStackPolicyRouteHandler: RouteHandler<
  typeof postActionGetStackPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
