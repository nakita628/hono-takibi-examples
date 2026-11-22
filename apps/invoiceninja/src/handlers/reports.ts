import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1ExportsPreviewHashRoute,
  postApiV1ReportsActivitiesRoute,
  postApiV1ReportsArDetailReportRoute,
  postApiV1ReportsArSummaryReportRoute,
  postApiV1ReportsClientBalanceReportRoute,
  postApiV1ReportsClientContactsRoute,
  postApiV1ReportsClientSalesReportRoute,
  postApiV1ReportsClientsRoute,
  postApiV1ReportsContactsRoute,
  postApiV1ReportsCreditsRoute,
  postApiV1ReportsDocumentsRoute,
  postApiV1ReportsExpensesRoute,
  postApiV1ReportsInvoiceItemsRoute,
  postApiV1ReportsInvoicesRoute,
  postApiV1ReportsPaymentsRoute,
  postApiV1ReportsPreviewHashRoute,
  postApiV1ReportsProductSalesRoute,
  postApiV1ReportsProductsRoute,
  postApiV1ReportsProfitlossRoute,
  postApiV1ReportsProjectsRoute,
  postApiV1ReportsQuoteItemsRoute,
  postApiV1ReportsQuotesRoute,
  postApiV1ReportsRecurringInvoicesRoute,
  postApiV1ReportsTasksRoute,
  postApiV1ReportsTaxPeriodReportRoute,
  postApiV1ReportsTaxSummaryReportRoute,
  postApiV1ReportsUserSalesReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(postApiV1ReportsContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsExpensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsInvoiceItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProductSalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProfitlossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsQuoteItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsRecurringInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsArDetailReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsArSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientBalanceReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsClientSalesReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTaxSummaryReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsTaxPeriodReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsUserSalesReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportsPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ExportsPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })
