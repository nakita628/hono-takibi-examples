import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeImportSnapshotTasksRoute,
  postActionDescribeImportSnapshotTasksRoute,
} from '../routes'

export const getActionDescribeImportSnapshotTasksRouteHandler: RouteHandler<
  typeof getActionDescribeImportSnapshotTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeImportSnapshotTasksRouteHandler: RouteHandler<
  typeof postActionDescribeImportSnapshotTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
