import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentAutoRechargePrefsRoute,
  patchPaymentAutoRechargePrefsRoute,
  postPaymentStoredPaymentTransactionsRoute,
} from '../routes'

export const getPaymentAutoRechargePrefsRouteHandler: RouteHandler<
  typeof getPaymentAutoRechargePrefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPaymentAutoRechargePrefsRouteHandler: RouteHandler<
  typeof patchPaymentAutoRechargePrefsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentStoredPaymentTransactionsRouteHandler: RouteHandler<
  typeof postPaymentStoredPaymentTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
