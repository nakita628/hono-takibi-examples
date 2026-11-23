import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserAddresses2Route,
  getUserAddressesId2Route,
  postUserAddresses2Route,
} from '../routes'

export const getUserAddresses2RouteHandler: RouteHandler<typeof getUserAddresses2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUserAddresses2RouteHandler: RouteHandler<typeof postUserAddresses2Route> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserAddressesId2RouteHandler: RouteHandler<
  typeof getUserAddressesId2Route
> = async (c) => {
  throw new Error('Not implemented')
}
