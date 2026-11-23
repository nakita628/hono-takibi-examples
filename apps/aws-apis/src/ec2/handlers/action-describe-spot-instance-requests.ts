import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSpotInstanceRequestsRoute,
  postActionDescribeSpotInstanceRequestsRoute,
} from '../routes'

export const getActionDescribeSpotInstanceRequestsRouteHandler: RouteHandler<
  typeof getActionDescribeSpotInstanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSpotInstanceRequestsRouteHandler: RouteHandler<
  typeof postActionDescribeSpotInstanceRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
