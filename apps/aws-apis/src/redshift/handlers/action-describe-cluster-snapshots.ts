import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterSnapshotsRoute,
  postActionDescribeClusterSnapshotsRoute,
} from '../routes'

export const getActionDescribeClusterSnapshotsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterSnapshotsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
