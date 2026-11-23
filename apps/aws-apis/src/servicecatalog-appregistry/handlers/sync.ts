import type { RouteHandler } from '@hono/zod-openapi'
import type { postSyncResourceTypeResourceRoute } from '../routes'

export const postSyncResourceTypeResourceRouteHandler: RouteHandler<
  typeof postSyncResourceTypeResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
