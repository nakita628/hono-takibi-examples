import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRoute,
  getCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRoute,
  getCompaniesCompanyIdReportsEnhancedInvoicesRoute,
  getCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
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
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetentionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrdersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLossRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcessRoute, (c) => {
    throw new Error('Not implemented')
  })
