import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1BalancesRoute,
  getV1FinancialAccountsFinancialAccountTokenBalancesRoute,
  getV1FinancialAccountsFinancialAccountTokenOpenToBuyRoute,
} from '../routes'

export const getV1BalancesRouteHandler: RouteHandler<typeof getV1BalancesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenBalancesRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FinancialAccountsFinancialAccountTokenOpenToBuyRouteHandler: RouteHandler<
  typeof getV1FinancialAccountsFinancialAccountTokenOpenToBuyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
