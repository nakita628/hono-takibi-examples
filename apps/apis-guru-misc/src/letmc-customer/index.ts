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
} from './routes'
import {
  deleteV2CustomerShortNameSessionRouteHandler,
  getV2CustomerShortNameBranchBranchesBranchIDRouteHandler,
  getV2CustomerShortNameBranchBranchesRouteHandler,
  getV2CustomerShortNameLandlordAccountingRouteHandler,
  getV2CustomerShortNameLandlordDocumentRouteHandler,
  getV2CustomerShortNameLandlordInventoryRouteHandler,
  getV2CustomerShortNameLandlordInvoiceRouteHandler,
  getV2CustomerShortNameLandlordLandlordcrmentriesRouteHandler,
  getV2CustomerShortNameLandlordMaintenanceRouteHandler,
  getV2CustomerShortNameLandlordProfitlossRouteHandler,
  getV2CustomerShortNameLandlordRentarrearsRouteHandler,
  getV2CustomerShortNameLandlordSasRouteHandler,
  getV2CustomerShortNameLandlordSettingsRouteHandler,
  getV2CustomerShortNameLandlordSummaryRouteHandler,
  getV2CustomerShortNameLandlordTenancyagreementRouteHandler,
  getV2CustomerShortNameLandlordTenancyRouteHandler,
  getV2CustomerShortNamePhotoDownloadRouteHandler,
  getV2CustomerShortNamePropertyPropertyIDPhotosRouteHandler,
  getV2CustomerShortNameSessionRouteHandler,
  postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRouteHandler,
  postV2CustomerShortNameSessionCreatelandlordloginRouteHandler,
  postV2CustomerShortNameSessionResetpasswordRouteHandler,
  postV2CustomerShortNameSessionRouteHandler,
  putV2CustomerShortNameSessionPasswordRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV2CustomerShortNameBranchBranchesRoute,
    getV2CustomerShortNameBranchBranchesRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameBranchBranchesBranchIDRoute,
    getV2CustomerShortNameBranchBranchesBranchIDRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordAccountingRoute,
    getV2CustomerShortNameLandlordAccountingRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordDocumentRoute,
    getV2CustomerShortNameLandlordDocumentRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordInventoryRoute,
    getV2CustomerShortNameLandlordInventoryRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordInvoiceRoute,
    getV2CustomerShortNameLandlordInvoiceRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordLandlordcrmentriesRoute,
    getV2CustomerShortNameLandlordLandlordcrmentriesRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordMaintenanceRoute,
    getV2CustomerShortNameLandlordMaintenanceRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordProfitlossRoute,
    getV2CustomerShortNameLandlordProfitlossRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordRentarrearsRoute,
    getV2CustomerShortNameLandlordRentarrearsRouteHandler,
  )
  .openapi(getV2CustomerShortNameLandlordSasRoute, getV2CustomerShortNameLandlordSasRouteHandler)
  .openapi(
    getV2CustomerShortNameLandlordSettingsRoute,
    getV2CustomerShortNameLandlordSettingsRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordSummaryRoute,
    getV2CustomerShortNameLandlordSummaryRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordTenancyRoute,
    getV2CustomerShortNameLandlordTenancyRouteHandler,
  )
  .openapi(
    postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRoute,
    postV2CustomerShortNameLandlordTenancyMaintenancePreferenceRouteHandler,
  )
  .openapi(
    getV2CustomerShortNameLandlordTenancyagreementRoute,
    getV2CustomerShortNameLandlordTenancyagreementRouteHandler,
  )
  .openapi(
    getV2CustomerShortNamePhotoDownloadRoute,
    getV2CustomerShortNamePhotoDownloadRouteHandler,
  )
  .openapi(
    getV2CustomerShortNamePropertyPropertyIDPhotosRoute,
    getV2CustomerShortNamePropertyPropertyIDPhotosRouteHandler,
  )
  .openapi(deleteV2CustomerShortNameSessionRoute, deleteV2CustomerShortNameSessionRouteHandler)
  .openapi(getV2CustomerShortNameSessionRoute, getV2CustomerShortNameSessionRouteHandler)
  .openapi(postV2CustomerShortNameSessionRoute, postV2CustomerShortNameSessionRouteHandler)
  .openapi(
    postV2CustomerShortNameSessionCreatelandlordloginRoute,
    postV2CustomerShortNameSessionCreatelandlordloginRouteHandler,
  )
  .openapi(
    putV2CustomerShortNameSessionPasswordRoute,
    putV2CustomerShortNameSessionPasswordRouteHandler,
  )
  .openapi(
    postV2CustomerShortNameSessionResetpasswordRoute,
    postV2CustomerShortNameSessionResetpasswordRouteHandler,
  )

export default app
