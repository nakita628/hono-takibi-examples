import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeExportImageTasksRoute,
  postActionDescribeExportImageTasksRoute,
} from '../routes'

export const getActionDescribeExportImageTasksRouteHandler: RouteHandler<
  typeof getActionDescribeExportImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeExportImageTasksRouteHandler: RouteHandler<
  typeof postActionDescribeExportImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
