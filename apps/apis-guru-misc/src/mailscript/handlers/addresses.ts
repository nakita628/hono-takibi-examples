import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAddressesAddressKeysKeyRoute,
  deleteAddressesAddressRoute,
  getAddressesAddressKeysKeyRoute,
  getAddressesAddressKeysRoute,
  getAddressesRoute,
  postAddressesAddressKeysRoute,
  postAddressesRoute,
  putAddressesAddressKeysKeyRoute,
} from '../routes'

export const getAddressesRouteHandler: RouteHandler<typeof getAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesRouteHandler: RouteHandler<typeof postAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAddressesAddressRouteHandler: RouteHandler<
  typeof deleteAddressesAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressKeysRouteHandler: RouteHandler<
  typeof getAddressesAddressKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesAddressKeysRouteHandler: RouteHandler<
  typeof postAddressesAddressKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAddressesAddressKeysKeyRouteHandler: RouteHandler<
  typeof deleteAddressesAddressKeysKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressKeysKeyRouteHandler: RouteHandler<
  typeof getAddressesAddressKeysKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAddressesAddressKeysKeyRouteHandler: RouteHandler<
  typeof putAddressesAddressKeysKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
