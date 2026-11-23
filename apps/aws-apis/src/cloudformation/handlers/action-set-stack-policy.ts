import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetStackPolicyRoute, postActionSetStackPolicyRoute } from '../routes'

export const getActionSetStackPolicyRouteHandler: RouteHandler<
  typeof getActionSetStackPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetStackPolicyRouteHandler: RouteHandler<
  typeof postActionSetStackPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
