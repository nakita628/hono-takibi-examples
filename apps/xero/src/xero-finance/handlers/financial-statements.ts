import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFinancialStatementsBalanceSheetRoute,
  getFinancialStatementsCashflowRoute,
  getFinancialStatementsContactsExpenseRoute,
  getFinancialStatementsContactsRevenueRoute,
  getFinancialStatementsProfitAndLossRoute,
  getFinancialStatementsTrialBalanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financialStatementsHandler = app
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
