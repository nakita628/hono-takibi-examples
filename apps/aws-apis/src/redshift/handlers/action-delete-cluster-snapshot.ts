import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteClusterSnapshotRoute,
  postActionDeleteClusterSnapshotRoute,
} from '../routes'

export const getActionDeleteClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionDeleteClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionDeleteClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
