import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreSnapshotFromRecycleBinRoute,
  postActionRestoreSnapshotFromRecycleBinRoute,
} from '../routes'

export const getActionRestoreSnapshotFromRecycleBinRouteHandler: RouteHandler<
  typeof getActionRestoreSnapshotFromRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreSnapshotFromRecycleBinRouteHandler: RouteHandler<
  typeof postActionRestoreSnapshotFromRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}
