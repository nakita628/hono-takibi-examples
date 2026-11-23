import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWalletTransactionsLagoIdConsumptionsRoute,
  getWalletTransactionsLagoIdFundingsRoute,
  getWalletTransactionsLagoIdRoute,
  postWalletTransactionsLagoIdPaymentUrlRoute,
  postWalletTransactionsRoute,
} from '../routes'

export const postWalletTransactionsRouteHandler: RouteHandler<
  typeof postWalletTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWalletTransactionsLagoIdRouteHandler: RouteHandler<
  typeof getWalletTransactionsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWalletTransactionsLagoIdPaymentUrlRouteHandler: RouteHandler<
  typeof postWalletTransactionsLagoIdPaymentUrlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWalletTransactionsLagoIdConsumptionsRouteHandler: RouteHandler<
  typeof getWalletTransactionsLagoIdConsumptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWalletTransactionsLagoIdFundingsRouteHandler: RouteHandler<
  typeof getWalletTransactionsLagoIdFundingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
