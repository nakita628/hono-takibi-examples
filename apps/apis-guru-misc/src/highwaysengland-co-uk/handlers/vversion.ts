import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVVersionAreasAreaIdsRoute,
  getVVersionAreasRoute,
  getVVersionQualityDailyRoute,
  getVVersionQualityOverallRoute,
  getVVersionReportsReportTypeRoute,
  getVVersionReportsStartDateToEndDateReportTypeRoute,
  getVVersionSitesRoute,
  getVVersionSitesSiteIdsRoute,
  getVVersionSitetypesRoute,
  getVVersionSitetypesSiteTypeIdSitesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vversionHandler = app
  .openapi(getVVersionAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionAreasAreaIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionQualityDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionQualityOverallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionReportsReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionReportsStartDateToEndDateReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitesSiteIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitetypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVVersionSitetypesSiteTypeIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
