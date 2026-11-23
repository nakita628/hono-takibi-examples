import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeEndpointAccessRoute,
  postActionDescribeEndpointAccessRoute,
} from '../routes'

export const getActionDescribeEndpointAccessRouteHandler: RouteHandler<
  typeof getActionDescribeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeEndpointAccessRouteHandler: RouteHandler<
  typeof postActionDescribeEndpointAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
