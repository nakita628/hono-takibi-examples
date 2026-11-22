import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2OrgsOrgIdAssociatedInvoicesRoute,
  getApiAtlasV2OrgsOrgIdBillingCostExplorerUsageTokenRoute,
  getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdCsvRoute,
  getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdLineItemsSearchRoute,
  getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsReportIdRoute,
  getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsRoute,
  getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdRoute,
  getApiAtlasV2OrgsOrgIdInvoicesPendingRoute,
  getApiAtlasV2OrgsOrgIdInvoicesRoute,
  getApiAtlasV2SkuServicesRoute,
  getApiAtlasV2SkusRoute,
  getApiAtlasV2SkusSkuIdRoute,
  postApiAtlasV2OrgsOrgIdBillingCostExplorerUsageRoute,
  postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdGenerateAndDownloadReportRoute,
  postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(getApiAtlasV2OrgsOrgIdAssociatedInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdBillingCostExplorerUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdBillingCostExplorerUsageTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdLineItemsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesInvoiceIdReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2OrgsOrgIdInvoicesInvoiceIdGenerateAndDownloadReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2OrgsOrgIdInvoicesPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2SkuServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2SkusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2SkusSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
