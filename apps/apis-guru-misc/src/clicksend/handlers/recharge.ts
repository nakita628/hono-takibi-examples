import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRechargeCreditCardRoute,
  getRechargePackagesCountryCountryRoute,
  getRechargeTransactionsRoute,
  getRechargeTransactionsTransactionIdRoute,
  putRechargeCreditCardRoute,
  putRechargePurchasePackageIdRoute,
} from '../routes'

export const getRechargeCreditCardRouteHandler: RouteHandler<
  typeof getRechargeCreditCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRechargeCreditCardRouteHandler: RouteHandler<
  typeof putRechargeCreditCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRechargePackagesCountryCountryRouteHandler: RouteHandler<
  typeof getRechargePackagesCountryCountryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRechargePurchasePackageIdRouteHandler: RouteHandler<
  typeof putRechargePurchasePackageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRechargeTransactionsRouteHandler: RouteHandler<
  typeof getRechargeTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRechargeTransactionsTransactionIdRouteHandler: RouteHandler<
  typeof getRechargeTransactionsTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
