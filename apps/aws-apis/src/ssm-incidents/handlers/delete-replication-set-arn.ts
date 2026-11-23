import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteReplicationSetArnRoute } from '../routes'

export const postDeleteReplicationSetArnRouteHandler: RouteHandler<
  typeof postDeleteReplicationSetArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
