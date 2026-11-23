import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteResourcePolicyRoute } from '../routes'

export const postDeleteResourcePolicyRouteHandler: RouteHandler<
  typeof postDeleteResourcePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
