import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterSnapshotAttributesRoute,
  postActionDescribeDBClusterSnapshotAttributesRoute,
} from '../routes'

export const getActionDescribeDBClusterSnapshotAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterSnapshotAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterSnapshotAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterSnapshotAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
