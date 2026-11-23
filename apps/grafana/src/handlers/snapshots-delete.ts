import type { RouteHandler } from '@hono/zod-openapi'
import type { getSnapshotsDeleteDeleteKeyRoute } from '../routes'

export const getSnapshotsDeleteDeleteKeyRouteHandler: RouteHandler<
  typeof getSnapshotsDeleteDeleteKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
