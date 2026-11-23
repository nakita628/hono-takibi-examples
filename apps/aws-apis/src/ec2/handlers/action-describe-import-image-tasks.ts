import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeImportImageTasksRoute,
  postActionDescribeImportImageTasksRoute,
} from '../routes'

export const getActionDescribeImportImageTasksRouteHandler: RouteHandler<
  typeof getActionDescribeImportImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeImportImageTasksRouteHandler: RouteHandler<
  typeof postActionDescribeImportImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
