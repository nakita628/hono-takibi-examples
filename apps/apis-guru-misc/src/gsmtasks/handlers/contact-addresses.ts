import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContactAddressesIdIndexRoute,
  getContactAddressesIndexRoute,
  patchContactAddressesIdIndexRoute,
  postContactAddressesIndexRoute,
  putContactAddressesIdIndexRoute,
} from '../routes'

export const getContactAddressesIndexRouteHandler: RouteHandler<
  typeof getContactAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactAddressesIndexRouteHandler: RouteHandler<
  typeof postContactAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactAddressesIdIndexRouteHandler: RouteHandler<
  typeof getContactAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchContactAddressesIdIndexRouteHandler: RouteHandler<
  typeof patchContactAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putContactAddressesIdIndexRouteHandler: RouteHandler<
  typeof putContactAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
