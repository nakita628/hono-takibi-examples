import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageDailySnapshotsRoute } from '../routes'

export const getUsageDailySnapshotsRouteHandler: RouteHandler<
  typeof getUsageDailySnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
