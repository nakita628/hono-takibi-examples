import type { RouteHandler } from '@hono/zod-openapi'
import type { postListResourcePoliciesRoute } from '../routes'

export const postListResourcePoliciesRouteHandler: RouteHandler<
  typeof postListResourcePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
