import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CustomerShortNameLandlordAccountingRoute,
  getV2CustomerShortNameLandlordDocumentRoute,
  getV2CustomerShortNameLandlordInventoryRoute,
  getV2CustomerShortNameLandlordInvoiceRoute,
  getV2CustomerShortNameLandlordLandlordcrmentriesRoute,
  getV2CustomerShortNameLandlordMaintenanceRoute,
  getV2CustomerShortNameLandlordProfitlossRoute,
  getV2CustomerShortNameLandlordRentarrearsRoute,
  getV2CustomerShortNameLandlordSasRoute,
  getV2CustomerShortNameLandlordSettingsRoute,
  getV2CustomerShortNameLandlordSummaryRoute,
  getV2CustomerShortNameLandlordTenancyagreementRoute,
  getV2CustomerShortNameLandlordTenancyRoute,
  postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const landlordControllerHandler = app
  .openapi(getV2CustomerShortNameLandlordAccountingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordLandlordcrmentriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordProfitlossRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordRentarrearsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordSasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordTenancyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameLandlordTenancyagreementRoute, (c) => {
    throw new Error('Not implemented')
  })
