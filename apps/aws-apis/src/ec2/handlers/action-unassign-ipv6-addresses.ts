import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUnassignIpv6AddressesRoute,
  postActionUnassignIpv6AddressesRoute,
} from '../routes'

export const getActionUnassignIpv6AddressesRouteHandler: RouteHandler<
  typeof getActionUnassignIpv6AddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUnassignIpv6AddressesRouteHandler: RouteHandler<
  typeof postActionUnassignIpv6AddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
