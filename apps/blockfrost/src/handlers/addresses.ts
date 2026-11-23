import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAddressesAddressExtendedRoute,
  getAddressesAddressRoute,
  getAddressesAddressTotalRoute,
  getAddressesAddressTransactionsRoute,
  getAddressesAddressTxsRoute,
  getAddressesAddressUtxosAssetRoute,
  getAddressesAddressUtxosRoute,
} from '../routes'

export const getAddressesAddressRouteHandler: RouteHandler<
  typeof getAddressesAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressExtendedRouteHandler: RouteHandler<
  typeof getAddressesAddressExtendedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressTotalRouteHandler: RouteHandler<
  typeof getAddressesAddressTotalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressUtxosRouteHandler: RouteHandler<
  typeof getAddressesAddressUtxosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressUtxosAssetRouteHandler: RouteHandler<
  typeof getAddressesAddressUtxosAssetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressTxsRouteHandler: RouteHandler<
  typeof getAddressesAddressTxsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddressesAddressTransactionsRouteHandler: RouteHandler<
  typeof getAddressesAddressTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
