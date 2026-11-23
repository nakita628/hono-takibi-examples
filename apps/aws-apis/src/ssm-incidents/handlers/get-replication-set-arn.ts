import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetReplicationSetArnRoute } from '../routes'

export const getGetReplicationSetArnRouteHandler: RouteHandler<
  typeof getGetReplicationSetArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
