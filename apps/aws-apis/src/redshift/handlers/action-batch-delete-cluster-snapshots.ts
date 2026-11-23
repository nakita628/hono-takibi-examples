import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchDeleteClusterSnapshotsRoute,
  postActionBatchDeleteClusterSnapshotsRoute,
} from '../routes'

export const getActionBatchDeleteClusterSnapshotsRouteHandler: RouteHandler<
  typeof getActionBatchDeleteClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchDeleteClusterSnapshotsRouteHandler: RouteHandler<
  typeof postActionBatchDeleteClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
