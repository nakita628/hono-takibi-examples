import type { RouteHandler } from '@hono/zod-openapi'
import type { postAttachedPoliciesTargetRoute } from '../routes'

export const postAttachedPoliciesTargetRouteHandler: RouteHandler<
  typeof postAttachedPoliciesTargetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
