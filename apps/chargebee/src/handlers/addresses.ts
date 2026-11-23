import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddressesRoute, postAddressesRoute } from '../routes'

export const getAddressesRouteHandler: RouteHandler<typeof getAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesRouteHandler: RouteHandler<typeof postAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}
