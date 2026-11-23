import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVerifiedAccessEndpointsRoute,
  postActionDescribeVerifiedAccessEndpointsRoute,
} from '../routes'

export const getActionDescribeVerifiedAccessEndpointsRouteHandler: RouteHandler<
  typeof getActionDescribeVerifiedAccessEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVerifiedAccessEndpointsRouteHandler: RouteHandler<
  typeof postActionDescribeVerifiedAccessEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
