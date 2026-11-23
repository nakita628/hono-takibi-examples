import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFinancialStatementsBalanceSheetRoute,
  getFinancialStatementsCashflowRoute,
  getFinancialStatementsContactsExpenseRoute,
  getFinancialStatementsContactsRevenueRoute,
  getFinancialStatementsProfitAndLossRoute,
  getFinancialStatementsTrialBalanceRoute,
} from '../routes'

export const getFinancialStatementsBalanceSheetRouteHandler: RouteHandler<
  typeof getFinancialStatementsBalanceSheetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinancialStatementsCashflowRouteHandler: RouteHandler<
  typeof getFinancialStatementsCashflowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinancialStatementsProfitAndLossRouteHandler: RouteHandler<
  typeof getFinancialStatementsProfitAndLossRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinancialStatementsTrialBalanceRouteHandler: RouteHandler<
  typeof getFinancialStatementsTrialBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinancialStatementsContactsRevenueRouteHandler: RouteHandler<
  typeof getFinancialStatementsContactsRevenueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinancialStatementsContactsExpenseRouteHandler: RouteHandler<
  typeof getFinancialStatementsContactsExpenseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
