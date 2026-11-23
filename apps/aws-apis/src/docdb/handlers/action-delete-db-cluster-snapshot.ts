import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBClusterSnapshotRoute,
  postActionDeleteDBClusterSnapshotRoute,
} from '../routes'

export const getActionDeleteDBClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionDeleteDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionDeleteDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
