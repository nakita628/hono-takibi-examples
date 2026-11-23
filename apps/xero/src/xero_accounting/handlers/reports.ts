import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReportsAgedPayablesByContactRoute,
  getReportsAgedReceivablesByContactRoute,
  getReportsBalanceSheetRoute,
  getReportsBankSummaryRoute,
  getReportsBudgetSummaryRoute,
  getReportsExecutiveSummaryRoute,
  getReportsProfitAndLossRoute,
  getReportsReportIDRoute,
  getReportsRoute,
  getReportsTenNinetyNineRoute,
  getReportsTrialBalanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsTenNinetyNineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsAgedPayablesByContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsAgedReceivablesByContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBankSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsReportIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsBudgetSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsExecutiveSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsProfitAndLossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsTrialBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
