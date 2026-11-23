import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssetsAssetAddressesRoute,
  getAssetsAssetHistoryRoute,
  getAssetsAssetRoute,
  getAssetsAssetTransactionsRoute,
  getAssetsAssetTxsRoute,
  getAssetsAssetUtxosRoute,
  getAssetsPolicyPolicyIdRoute,
  getAssetsRoute,
} from '../routes'

export const getAssetsRouteHandler: RouteHandler<typeof getAssetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetRouteHandler: RouteHandler<typeof getAssetsAssetRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetHistoryRouteHandler: RouteHandler<
  typeof getAssetsAssetHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetTxsRouteHandler: RouteHandler<typeof getAssetsAssetTxsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetTransactionsRouteHandler: RouteHandler<
  typeof getAssetsAssetTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetAddressesRouteHandler: RouteHandler<
  typeof getAssetsAssetAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsAssetUtxosRouteHandler: RouteHandler<
  typeof getAssetsAssetUtxosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssetsPolicyPolicyIdRouteHandler: RouteHandler<
  typeof getAssetsPolicyPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
