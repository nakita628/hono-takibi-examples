import type { RouteHandler } from '@hono/zod-openapi'
import type { getDashboardSnapshotsRoute } from '../routes'

export const getDashboardSnapshotsRouteHandler: RouteHandler<
  typeof getDashboardSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
