import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeApplicationsRoute,
  postActionDescribeApplicationsRoute,
} from '../routes'

export const getActionDescribeApplicationsRouteHandler: RouteHandler<
  typeof getActionDescribeApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeApplicationsRouteHandler: RouteHandler<
  typeof postActionDescribeApplicationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
