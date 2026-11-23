import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2CustomerShortNameSessionRoute,
  getV2CustomerShortNameBranchBranchesBranchIDRoute,
  getV2CustomerShortNameBranchBranchesRoute,
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
  getV2CustomerShortNamePhotoDownloadRoute,
  getV2CustomerShortNamePropertyPropertyIDPhotosRoute,
  getV2CustomerShortNameSessionRoute,
  postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRoute,
  postV2CustomerShortNameSessionCreatelandlordloginRoute,
  postV2CustomerShortNameSessionResetpasswordRoute,
  postV2CustomerShortNameSessionRoute,
  putV2CustomerShortNameSessionPasswordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2CustomerShortNameBranchBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameBranchBranchesBranchIDRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getV2CustomerShortNamePhotoDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNamePropertyPropertyIDPhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionCreatelandlordloginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2CustomerShortNameSessionPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CustomerShortNameSessionResetpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
