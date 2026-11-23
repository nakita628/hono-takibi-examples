import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetResourcePolicyResourceArnRoute } from '../routes'

export const getGetResourcePolicyResourceArnRouteHandler: RouteHandler<
  typeof getGetResourcePolicyResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
