import type { RouteHandler } from '@hono/zod-openapi'
import type { postPolicyTargetsPolicyNameRoute } from '../routes'

export const postPolicyTargetsPolicyNameRouteHandler: RouteHandler<
  typeof postPolicyTargetsPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
