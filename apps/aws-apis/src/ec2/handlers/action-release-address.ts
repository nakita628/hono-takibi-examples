import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionReleaseAddressRoute, postActionReleaseAddressRoute } from '../routes'

export const getActionReleaseAddressRouteHandler: RouteHandler<
  typeof getActionReleaseAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReleaseAddressRouteHandler: RouteHandler<
  typeof postActionReleaseAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
