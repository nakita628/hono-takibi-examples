import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetComponentPolicyComponentArnRoute } from '../routes'

export const getGetComponentPolicyComponentArnRouteHandler: RouteHandler<
  typeof getGetComponentPolicyComponentArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
