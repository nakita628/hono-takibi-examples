import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInterfacePermissionsRoute,
  postActionDescribeNetworkInterfacePermissionsRoute,
} from '../routes'

export const getActionDescribeNetworkInterfacePermissionsRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInterfacePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInterfacePermissionsRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInterfacePermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
