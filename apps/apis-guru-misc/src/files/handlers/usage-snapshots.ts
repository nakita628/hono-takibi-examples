import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsageSnapshotsRoute } from '../routes'

export const getUsageSnapshotsRouteHandler: RouteHandler<typeof getUsageSnapshotsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
