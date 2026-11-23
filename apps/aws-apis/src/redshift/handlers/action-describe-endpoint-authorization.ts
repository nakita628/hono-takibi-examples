import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEndpointAuthorizationRoute,
  postActionDescribeEndpointAuthorizationRoute,
} from '../routes'

export const getActionDescribeEndpointAuthorizationRouteHandler: RouteHandler<
  typeof getActionDescribeEndpointAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEndpointAuthorizationRouteHandler: RouteHandler<
  typeof postActionDescribeEndpointAuthorizationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
