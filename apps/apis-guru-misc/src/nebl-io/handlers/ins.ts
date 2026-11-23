import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInsAddrAddressBalanceRoute,
  getInsAddrAddressRoute,
  getInsAddrAddressTotalReceivedRoute,
  getInsAddrAddressTotalSentRoute,
  getInsAddrAddressUnconfirmedBalanceRoute,
  getInsAddrAddressUtxoRoute,
  getInsBlockBlockhashRoute,
  getInsBlockIndexBlockindexRoute,
  getInsRawtxTxidRoute,
  getInsStatusRoute,
  getInsSyncRoute,
  getInsTxsRoute,
  getInsTxTxidRoute,
  postInsTxSendRoute,
} from '../routes'

export const getInsAddrAddressRouteHandler: RouteHandler<typeof getInsAddrAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInsAddrAddressBalanceRouteHandler: RouteHandler<
  typeof getInsAddrAddressBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsAddrAddressTotalReceivedRouteHandler: RouteHandler<
  typeof getInsAddrAddressTotalReceivedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsAddrAddressTotalSentRouteHandler: RouteHandler<
  typeof getInsAddrAddressTotalSentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsAddrAddressUnconfirmedBalanceRouteHandler: RouteHandler<
  typeof getInsAddrAddressUnconfirmedBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsAddrAddressUtxoRouteHandler: RouteHandler<
  typeof getInsAddrAddressUtxoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsBlockIndexBlockindexRouteHandler: RouteHandler<
  typeof getInsBlockIndexBlockindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsBlockBlockhashRouteHandler: RouteHandler<
  typeof getInsBlockBlockhashRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsRawtxTxidRouteHandler: RouteHandler<typeof getInsRawtxTxidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsStatusRouteHandler: RouteHandler<typeof getInsStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsSyncRouteHandler: RouteHandler<typeof getInsSyncRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInsTxSendRouteHandler: RouteHandler<typeof postInsTxSendRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsTxTxidRouteHandler: RouteHandler<typeof getInsTxTxidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsTxsRouteHandler: RouteHandler<typeof getInsTxsRoute> = async (c) => {
  throw new Error('Not implemented')
}
