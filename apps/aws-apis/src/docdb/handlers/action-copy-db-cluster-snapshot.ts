import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCopyDBClusterSnapshotRoute,
  postActionCopyDBClusterSnapshotRoute,
} from '../routes'

export const getActionCopyDBClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionCopyDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyDBClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionCopyDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
