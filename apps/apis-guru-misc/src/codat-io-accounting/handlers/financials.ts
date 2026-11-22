import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdDataFinancialsBalanceSheetRoute,
  getCompaniesCompanyIdDataFinancialsCashFlowStatementRoute,
  getCompaniesCompanyIdDataFinancialsProfitAndLossRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financialsHandler = app
  .openapi(getCompaniesCompanyIdDataFinancialsBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataFinancialsCashFlowStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataFinancialsProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
