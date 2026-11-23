import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchModifyClusterSnapshotsRoute,
  postActionBatchModifyClusterSnapshotsRoute,
} from '../routes'

export const getActionBatchModifyClusterSnapshotsRouteHandler: RouteHandler<
  typeof getActionBatchModifyClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchModifyClusterSnapshotsRouteHandler: RouteHandler<
  typeof postActionBatchModifyClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
