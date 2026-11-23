import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpAddressRoute } from '../routes'

export const getIpAddressRouteHandler: RouteHandler<typeof getIpAddressRoute> = async (c) => {
  throw new Error('Not implemented')
}
