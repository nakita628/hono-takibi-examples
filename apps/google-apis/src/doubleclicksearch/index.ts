import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute,
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute,
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute,
  getDoubleclicksearchV2CustomerCustomerIdConversionRoute,
  getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRoute,
  getDoubleclicksearchV2ReportsReportIdRoute,
  postDoubleclicksearchV2ConversionRoute,
  postDoubleclicksearchV2ConversionUpdateAvailabilityRoute,
  postDoubleclicksearchV2ReportsGenerateRoute,
  postDoubleclicksearchV2ReportsRoute,
  putDoubleclicksearchV2ConversionRoute,
} from './routes'
import {
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRouteHandler,
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRouteHandler,
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRouteHandler,
  getDoubleclicksearchV2CustomerCustomerIdConversionRouteHandler,
  getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRouteHandler,
  getDoubleclicksearchV2ReportsReportIdRouteHandler,
  postDoubleclicksearchV2ConversionRouteHandler,
  postDoubleclicksearchV2ConversionUpdateAvailabilityRouteHandler,
  postDoubleclicksearchV2ReportsGenerateRouteHandler,
  postDoubleclicksearchV2ReportsRouteHandler,
  putDoubleclicksearchV2ConversionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute,
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRouteHandler,
  )
  .openapi(
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute,
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRouteHandler,
  )
  .openapi(
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute,
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRouteHandler,
  )
  .openapi(postDoubleclicksearchV2ConversionRoute, postDoubleclicksearchV2ConversionRouteHandler)
  .openapi(putDoubleclicksearchV2ConversionRoute, putDoubleclicksearchV2ConversionRouteHandler)
  .openapi(
    postDoubleclicksearchV2ConversionUpdateAvailabilityRoute,
    postDoubleclicksearchV2ConversionUpdateAvailabilityRouteHandler,
  )
  .openapi(
    getDoubleclicksearchV2CustomerCustomerIdConversionRoute,
    getDoubleclicksearchV2CustomerCustomerIdConversionRouteHandler,
  )
  .openapi(postDoubleclicksearchV2ReportsRoute, postDoubleclicksearchV2ReportsRouteHandler)
  .openapi(
    postDoubleclicksearchV2ReportsGenerateRoute,
    postDoubleclicksearchV2ReportsGenerateRouteHandler,
  )
  .openapi(
    getDoubleclicksearchV2ReportsReportIdRoute,
    getDoubleclicksearchV2ReportsReportIdRouteHandler,
  )
  .openapi(
    getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRoute,
    getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRouteHandler,
  )

export default app
