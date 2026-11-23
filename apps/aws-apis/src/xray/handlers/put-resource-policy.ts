import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutResourcePolicyRoute } from '../routes'

export const postPutResourcePolicyRouteHandler: RouteHandler<
  typeof postPutResourcePolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
