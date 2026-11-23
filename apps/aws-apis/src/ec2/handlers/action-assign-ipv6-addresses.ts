import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssignIpv6AddressesRoute,
  postActionAssignIpv6AddressesRoute,
} from '../routes'

export const getActionAssignIpv6AddressesRouteHandler: RouteHandler<
  typeof getActionAssignIpv6AddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssignIpv6AddressesRouteHandler: RouteHandler<
  typeof postActionAssignIpv6AddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
