import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSnapshotCopyGrantsRoute,
  postActionDescribeSnapshotCopyGrantsRoute,
} from '../routes'

export const getActionDescribeSnapshotCopyGrantsRouteHandler: RouteHandler<
  typeof getActionDescribeSnapshotCopyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSnapshotCopyGrantsRouteHandler: RouteHandler<
  typeof postActionDescribeSnapshotCopyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
