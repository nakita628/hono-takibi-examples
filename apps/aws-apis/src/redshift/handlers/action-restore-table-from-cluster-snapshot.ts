import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreTableFromClusterSnapshotRoute,
  postActionRestoreTableFromClusterSnapshotRoute,
} from '../routes'

export const getActionRestoreTableFromClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionRestoreTableFromClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreTableFromClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionRestoreTableFromClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
