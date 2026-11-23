import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartReplicationRoute } from '../routes'

export const postStartReplicationRouteHandler: RouteHandler<
  typeof postStartReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
