import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateReplicationSetRoute } from '../routes'

export const postUpdateReplicationSetRouteHandler: RouteHandler<
  typeof postUpdateReplicationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
