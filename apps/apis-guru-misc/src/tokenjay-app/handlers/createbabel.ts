import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreatebabelAddressRoute } from '../routes'

export const getCreatebabelAddressRouteHandler: RouteHandler<
  typeof getCreatebabelAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
