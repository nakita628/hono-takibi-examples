import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateReplicationSetRoute } from '../routes'

export const postCreateReplicationSetRouteHandler: RouteHandler<
  typeof postCreateReplicationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
