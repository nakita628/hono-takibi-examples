import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1FinancialAccountsFinancialAccountTokenHoldsRoute,
  getV1HoldsHoldTokenRoute,
  postV1FinancialAccountsFinancialAccountTokenHoldsRoute,
  postV1HoldsHoldTokenVoidRoute,
} from '../routes'

export const getV1FinancialAccountsFinancialAccountTokenHoldsRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1FinancialAccountsFinancialAccountTokenHoldsRouteHandler: RouteHandler<
  typeof postV1FinancialAccountsFinancialAccountTokenHoldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HoldsHoldTokenRouteHandler: RouteHandler<
  typeof getV1HoldsHoldTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1HoldsHoldTokenVoidRouteHandler: RouteHandler<
  typeof postV1HoldsHoldTokenVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
