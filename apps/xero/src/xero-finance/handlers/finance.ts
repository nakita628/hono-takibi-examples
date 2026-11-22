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
} from '../routes'

const app = new OpenAPIHono()

export const financeHandler = app
  .openapi(getCashValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsCashflowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsTrialBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsContactsRevenueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinancialStatementsContactsExpenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankStatementsPlusStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
