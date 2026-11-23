import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFeatureCategoriesRoute,
  getFeatureClassesRoute,
  getFeaturesFeatureIdRoute,
  getFeatureTypesRoute,
  getNameAuthoritiesRoute,
  getNamesChangesRoute,
  getNamesDecisionsRecentRoute,
  getNamesDecisionsYearRoute,
  getNamesInsideRoute,
  getNamesNameIdOutputFormatRoute,
  getNamesNearRoute,
  getNamesNotOfficialSearchRoute,
  getNamesOfficialSearchRoute,
  getNamesSearchRoute,
} from './routes'
import {
  getFeatureCategoriesRouteHandler,
  getFeatureClassesRouteHandler,
  getFeaturesFeatureIdRouteHandler,
  getFeatureTypesRouteHandler,
  getNameAuthoritiesRouteHandler,
  getNamesChangesRouteHandler,
  getNamesDecisionsRecentRouteHandler,
  getNamesDecisionsYearRouteHandler,
  getNamesInsideRouteHandler,
  getNamesNameIdOutputFormatRouteHandler,
  getNamesNearRouteHandler,
  getNamesNotOfficialSearchRouteHandler,
  getNamesOfficialSearchRouteHandler,
  getNamesSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFeatureCategoriesRoute, getFeatureCategoriesRouteHandler)
  .openapi(getFeatureClassesRoute, getFeatureClassesRouteHandler)
  .openapi(getFeatureTypesRoute, getFeatureTypesRouteHandler)
  .openapi(getFeaturesFeatureIdRoute, getFeaturesFeatureIdRouteHandler)
  .openapi(getNameAuthoritiesRoute, getNameAuthoritiesRouteHandler)
  .openapi(getNamesChangesRoute, getNamesChangesRouteHandler)
  .openapi(getNamesDecisionsRecentRoute, getNamesDecisionsRecentRouteHandler)
  .openapi(getNamesDecisionsYearRoute, getNamesDecisionsYearRouteHandler)
  .openapi(getNamesInsideRoute, getNamesInsideRouteHandler)
  .openapi(getNamesNearRoute, getNamesNearRouteHandler)
  .openapi(getNamesNotOfficialSearchRoute, getNamesNotOfficialSearchRouteHandler)
  .openapi(getNamesOfficialSearchRoute, getNamesOfficialSearchRouteHandler)
  .openapi(getNamesSearchRoute, getNamesSearchRouteHandler)
  .openapi(getNamesNameIdOutputFormatRoute, getNamesNameIdOutputFormatRouteHandler)

export default app
