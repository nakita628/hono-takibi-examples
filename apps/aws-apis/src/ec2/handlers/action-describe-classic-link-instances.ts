import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClassicLinkInstancesRoute,
  postActionDescribeClassicLinkInstancesRoute,
} from '../routes'

export const getActionDescribeClassicLinkInstancesRouteHandler: RouteHandler<
  typeof getActionDescribeClassicLinkInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClassicLinkInstancesRouteHandler: RouteHandler<
  typeof postActionDescribeClassicLinkInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
