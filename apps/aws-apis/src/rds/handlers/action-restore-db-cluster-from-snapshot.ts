import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBClusterFromSnapshotRoute,
  postActionRestoreDBClusterFromSnapshotRoute,
} from '../routes'

export const getActionRestoreDBClusterFromSnapshotRouteHandler: RouteHandler<
  typeof getActionRestoreDBClusterFromSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBClusterFromSnapshotRouteHandler: RouteHandler<
  typeof postActionRestoreDBClusterFromSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
