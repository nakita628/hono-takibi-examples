import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddressRoute } from '../routes'

export const getAddressRouteHandler: RouteHandler<typeof getAddressRoute> = async (c) => {
  throw new Error('Not implemented')
}
