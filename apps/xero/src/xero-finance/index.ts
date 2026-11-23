import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBankStatementsPlusStatementsRoute,
  getCashValidationRoute,
  getFinancialStatementsBalanceSheetRoute,
  getFinancialStatementsCashflowRoute,
  getFinancialStatementsContactsExpenseRoute,
  getFinancialStatementsContactsRevenueRoute,
  getFinancialStatementsProfitAndLossRoute,
  getFinancialStatementsTrialBalanceRoute,
} from './routes'
import {
  getBankStatementsPlusStatementsRouteHandler,
  getCashValidationRouteHandler,
  getFinancialStatementsBalanceSheetRouteHandler,
  getFinancialStatementsCashflowRouteHandler,
  getFinancialStatementsContactsExpenseRouteHandler,
  getFinancialStatementsContactsRevenueRouteHandler,
  getFinancialStatementsProfitAndLossRouteHandler,
  getFinancialStatementsTrialBalanceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCashValidationRoute, getCashValidationRouteHandler)
  .openapi(getFinancialStatementsBalanceSheetRoute, getFinancialStatementsBalanceSheetRouteHandler)
  .openapi(getFinancialStatementsCashflowRoute, getFinancialStatementsCashflowRouteHandler)
  .openapi(
    getFinancialStatementsProfitAndLossRoute,
    getFinancialStatementsProfitAndLossRouteHandler,
  )
  .openapi(getFinancialStatementsTrialBalanceRoute, getFinancialStatementsTrialBalanceRouteHandler)
  .openapi(
    getFinancialStatementsContactsRevenueRoute,
    getFinancialStatementsContactsRevenueRouteHandler,
  )
  .openapi(
    getFinancialStatementsContactsExpenseRoute,
    getFinancialStatementsContactsExpenseRouteHandler,
  )
  .openapi(getBankStatementsPlusStatementsRoute, getBankStatementsPlusStatementsRouteHandler)

export default app
