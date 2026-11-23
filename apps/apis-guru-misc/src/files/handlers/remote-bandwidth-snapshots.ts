import type { RouteHandler } from '@hono/zod-openapi'
import type { getRemoteBandwidthSnapshotsRoute } from '../routes'

export const getRemoteBandwidthSnapshotsRouteHandler: RouteHandler<
  typeof getRemoteBandwidthSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
