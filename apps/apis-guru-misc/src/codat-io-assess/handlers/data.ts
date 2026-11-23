import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataAssessAccountsCategoriesRoute,
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRoute,
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRoute,
  getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRoute,
  getDataCompaniesCompanyIdAssessExcelDownloadRoute,
  getDataCompaniesCompanyIdAssessExcelRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
  getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute,
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
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
  patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute,
  postDataCompaniesCompanyIdAssessExcelDownloadRoute,
  postDataCompaniesCompanyIdAssessExcelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessExcelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataCompaniesCompanyIdAssessExcelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataCompaniesCompanyIdAssessExcelDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDataCompaniesCompanyIdAssessExcelDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
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
