import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackResourcesRoute,
  postActionDescribeStackResourcesRoute,
} from '../routes'

export const getActionDescribeStackResourcesRouteHandler: RouteHandler<
  typeof getActionDescribeStackResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackResourcesRouteHandler: RouteHandler<
  typeof postActionDescribeStackResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
