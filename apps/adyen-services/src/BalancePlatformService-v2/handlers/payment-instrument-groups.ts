import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentInstrumentGroupsIdRoute,
  getPaymentInstrumentGroupsIdTransactionRulesRoute,
  postPaymentInstrumentGroupsRoute,
} from '../routes'

export const postPaymentInstrumentGroupsRouteHandler: RouteHandler<
  typeof postPaymentInstrumentGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentInstrumentGroupsIdRouteHandler: RouteHandler<
  typeof getPaymentInstrumentGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentInstrumentGroupsIdTransactionRulesRouteHandler: RouteHandler<
  typeof getPaymentInstrumentGroupsIdTransactionRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
