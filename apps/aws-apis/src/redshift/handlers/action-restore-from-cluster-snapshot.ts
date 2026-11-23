import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreFromClusterSnapshotRoute,
  postActionRestoreFromClusterSnapshotRoute,
} from '../routes'

export const getActionRestoreFromClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionRestoreFromClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreFromClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionRestoreFromClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
