import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCopyClusterSnapshotRoute,
  postActionCopyClusterSnapshotRoute,
} from '../routes'

export const getActionCopyClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionCopyClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionCopyClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
