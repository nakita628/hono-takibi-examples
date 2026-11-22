import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute,
  getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRoute,
  getDoubleclicksearchV2ReportsReportIdRoute,
  postDoubleclicksearchV2ReportsGenerateRoute,
  postDoubleclicksearchV2ReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute, (c) => {
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
