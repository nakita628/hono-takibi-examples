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
} from './routes'
import {
  getVVersionAreasAreaIdsRouteHandler,
  getVVersionAreasRouteHandler,
  getVVersionQualityDailyRouteHandler,
  getVVersionQualityOverallRouteHandler,
  getVVersionReportsReportTypeRouteHandler,
  getVVersionReportsStartDateToEndDateReportTypeRouteHandler,
  getVVersionSitesRouteHandler,
  getVVersionSitesSiteIdsRouteHandler,
  getVVersionSitetypesRouteHandler,
  getVVersionSitetypesSiteTypeIdSitesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getVVersionAreasRoute, getVVersionAreasRouteHandler)
  .openapi(getVVersionAreasAreaIdsRoute, getVVersionAreasAreaIdsRouteHandler)
  .openapi(getVVersionQualityDailyRoute, getVVersionQualityDailyRouteHandler)
  .openapi(getVVersionQualityOverallRoute, getVVersionQualityOverallRouteHandler)
  .openapi(getVVersionReportsReportTypeRoute, getVVersionReportsReportTypeRouteHandler)
  .openapi(
    getVVersionReportsStartDateToEndDateReportTypeRoute,
    getVVersionReportsStartDateToEndDateReportTypeRouteHandler,
  )
  .openapi(getVVersionSitesRoute, getVVersionSitesRouteHandler)
  .openapi(getVVersionSitesSiteIdsRoute, getVVersionSitesSiteIdsRouteHandler)
  .openapi(getVVersionSitetypesRoute, getVVersionSitetypesRouteHandler)
  .openapi(
    getVVersionSitetypesSiteTypeIdSitesRoute,
    getVVersionSitetypesSiteTypeIdSitesRouteHandler,
  )

export default app
