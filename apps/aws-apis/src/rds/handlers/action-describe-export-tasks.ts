import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeExportTasksRoute,
  postActionDescribeExportTasksRoute,
} from '../routes'

export const getActionDescribeExportTasksRouteHandler: RouteHandler<
  typeof getActionDescribeExportTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeExportTasksRouteHandler: RouteHandler<
  typeof postActionDescribeExportTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
