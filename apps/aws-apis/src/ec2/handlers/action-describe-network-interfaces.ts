import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkInterfacesRoute,
  postActionDescribeNetworkInterfacesRoute,
} from '../routes'

export const getActionDescribeNetworkInterfacesRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkInterfacesRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkInterfacesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
