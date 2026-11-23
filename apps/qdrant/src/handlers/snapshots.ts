import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSnapshotsSnapshotNameRoute,
  getSnapshotsRoute,
  getSnapshotsSnapshotNameRoute,
  postSnapshotsRoute,
} from '../routes'

export const getSnapshotsRouteHandler: RouteHandler<typeof getSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapshotsRouteHandler: RouteHandler<typeof postSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnapshotsSnapshotNameRouteHandler: RouteHandler<
  typeof deleteSnapshotsSnapshotNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnapshotsSnapshotNameRouteHandler: RouteHandler<
  typeof getSnapshotsSnapshotNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
