import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutScalingPolicyRoute, postActionPutScalingPolicyRoute } from '../routes'

export const getActionPutScalingPolicyRouteHandler: RouteHandler<
  typeof getActionPutScalingPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutScalingPolicyRouteHandler: RouteHandler<
  typeof postActionPutScalingPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
