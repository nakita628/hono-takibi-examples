import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2SnapshotsSnapshotIdRegionsRegionRoute,
  deleteV2SnapshotsSnapshotIdRoute,
  getV2SnapshotsRoute,
  getV2SnapshotsSnapshotIdRoute,
} from '../routes'

export const getV2SnapshotsRouteHandler: RouteHandler<typeof getV2SnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2SnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof getV2SnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SnapshotsSnapshotIdRouteHandler: RouteHandler<
  typeof deleteV2SnapshotsSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2SnapshotsSnapshotIdRegionsRegionRouteHandler: RouteHandler<
  typeof deleteV2SnapshotsSnapshotIdRegionsRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
