import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserAddressesIdRoute,
  getUserAddressesRoute,
  postUserAddressesRoute,
} from '../routes'

export const getUserAddressesRouteHandler: RouteHandler<typeof getUserAddressesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserAddressesRouteHandler: RouteHandler<typeof postUserAddressesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserAddressesIdRouteHandler: RouteHandler<typeof getUserAddressesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
