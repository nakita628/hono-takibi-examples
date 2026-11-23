import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBSnapshotsRoute,
  postActionDescribeDBSnapshotsRoute,
} from '../routes'

export const getActionDescribeDBSnapshotsRouteHandler: RouteHandler<
  typeof getActionDescribeDBSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBSnapshotsRouteHandler: RouteHandler<
  typeof postActionDescribeDBSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
