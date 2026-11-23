import type { RouteHandler } from '@hono/zod-openapi'
import type { getSnapshotSharedOptionsRoute } from '../routes'

export const getSnapshotSharedOptionsRouteHandler: RouteHandler<
  typeof getSnapshotSharedOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
