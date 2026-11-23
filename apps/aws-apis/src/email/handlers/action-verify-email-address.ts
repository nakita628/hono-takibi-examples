import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionVerifyEmailAddressRoute, postActionVerifyEmailAddressRoute } from '../routes'

export const getActionVerifyEmailAddressRouteHandler: RouteHandler<
  typeof getActionVerifyEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionVerifyEmailAddressRouteHandler: RouteHandler<
  typeof postActionVerifyEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
