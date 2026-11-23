import type { RouteHandler } from '@hono/zod-openapi'
import type { postListReplicationSetsRoute } from '../routes'

export const postListReplicationSetsRouteHandler: RouteHandler<
  typeof postListReplicationSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
