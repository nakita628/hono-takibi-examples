import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBSnapshotAttributesRoute,
  postActionDescribeDBSnapshotAttributesRoute,
} from '../routes'

export const getActionDescribeDBSnapshotAttributesRouteHandler: RouteHandler<
  typeof getActionDescribeDBSnapshotAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBSnapshotAttributesRouteHandler: RouteHandler<
  typeof postActionDescribeDBSnapshotAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
