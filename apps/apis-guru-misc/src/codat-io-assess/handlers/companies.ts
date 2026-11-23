import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRoute,
  getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRoute,
  getCompaniesCompanyIdReportsEnhancedInvoicesRoute,
  getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsEnhancedInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
