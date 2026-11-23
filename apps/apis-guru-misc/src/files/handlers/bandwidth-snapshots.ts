import type { RouteHandler } from '@hono/zod-openapi'
import type { getBandwidthSnapshotsRoute } from '../routes'

export const getBandwidthSnapshotsRouteHandler: RouteHandler<
  typeof getBandwidthSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
