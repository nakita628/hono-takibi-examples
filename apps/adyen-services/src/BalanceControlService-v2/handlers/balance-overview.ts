import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute,
  getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute,
} from '../routes'

export const getBalanceOverviewCompaniesCompanyAccountCodeBalancesRouteHandler: RouteHandler<
  typeof getBalanceOverviewCompaniesCompanyAccountCodeBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBalanceOverviewMerchantsMerchantAccountCodeBalancesRouteHandler: RouteHandler<
  typeof getBalanceOverviewMerchantsMerchantAccountCodeBalancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
