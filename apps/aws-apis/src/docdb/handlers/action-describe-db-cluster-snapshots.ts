import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterSnapshotsRoute,
  postActionDescribeDBClusterSnapshotsRoute,
} from '../routes'

export const getActionDescribeDBClusterSnapshotsRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterSnapshotsRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
