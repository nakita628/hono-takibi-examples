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
} from '../routes'

const app = new OpenAPIHono()

export const doubleclicksearchHandler = app
  .openapi(
    getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDoubleclicksearchV2ConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDoubleclicksearchV2ConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDoubleclicksearchV2ConversionUpdateAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDoubleclicksearchV2CustomerCustomerIdConversionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDoubleclicksearchV2ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDoubleclicksearchV2ReportsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDoubleclicksearchV2ReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRoute, (c) => {
    throw new Error('Not implemented')
  })
