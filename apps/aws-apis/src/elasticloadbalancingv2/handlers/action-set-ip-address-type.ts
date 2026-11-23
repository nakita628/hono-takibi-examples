import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSetIpAddressTypeRoute, postActionSetIpAddressTypeRoute } from '../routes'

export const getActionSetIpAddressTypeRouteHandler: RouteHandler<
  typeof getActionSetIpAddressTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetIpAddressTypeRouteHandler: RouteHandler<
  typeof postActionSetIpAddressTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
