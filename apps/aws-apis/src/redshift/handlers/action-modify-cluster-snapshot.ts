import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterSnapshotRoute,
  postActionModifyClusterSnapshotRoute,
} from '../routes'

export const getActionModifyClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionModifyClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionModifyClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
