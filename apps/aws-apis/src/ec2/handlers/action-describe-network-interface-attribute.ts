import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInterfaceAttributeRoute,
  postActionDescribeNetworkInterfaceAttributeRoute,
} from '../routes'

export const getActionDescribeNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInterfaceAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInterfaceAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
