import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStoreImageTasksRoute,
  postActionDescribeStoreImageTasksRoute,
} from '../routes'

export const getActionDescribeStoreImageTasksRouteHandler: RouteHandler<
  typeof getActionDescribeStoreImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStoreImageTasksRouteHandler: RouteHandler<
  typeof postActionDescribeStoreImageTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
