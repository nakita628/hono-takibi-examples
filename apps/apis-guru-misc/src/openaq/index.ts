import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFaviconIcoRoute,
  getPingRoute,
  getV1CitiesRoute,
  getV1CountriesCountryIdRoute,
  getV1CountriesRoute,
  getV1LatestLocationIdRoute,
  getV1LatestRoute,
  getV1LocationsLocationIdRoute,
  getV1LocationsRoute,
  getV1MeasurementsRoute,
  getV1ParametersRoute,
  getV1SourcesRoute,
  getV2AveragesRoute,
  getV2CitiesRoute,
  getV2CountriesCountryIdRoute,
  getV2CountriesRoute,
  getV2LatestLocationIdRoute,
  getV2LatestRoute,
  getV2LocationsLocationIdRoute,
  getV2LocationsRoute,
  getV2LocationsTilesMobileGeneralizedTilesJsonRoute,
  getV2LocationsTilesMobileGeneralizedZXYPbfRoute,
  getV2LocationsTilesMobileTilesJsonRoute,
  getV2LocationsTilesMobileZXYPbfRoute,
  getV2LocationsTilesTilesJsonRoute,
  getV2LocationsTilesViewerRoute,
  getV2LocationsTilesZXYPbfRoute,
  getV2ManufacturersRoute,
  getV2MeasurementsRoute,
  getV2ModelsRoute,
  getV2ParametersRoute,
  getV2ProjectsProjectIdRoute,
  getV2ProjectsRoute,
  getV2SourcesReadmeSlugRoute,
  getV2SourcesRoute,
  getV2SummaryRoute,
} from './routes'
import {
  getFaviconIcoRouteHandler,
  getPingRouteHandler,
  getV1CitiesRouteHandler,
  getV1CountriesCountryIdRouteHandler,
  getV1CountriesRouteHandler,
  getV1LatestLocationIdRouteHandler,
  getV1LatestRouteHandler,
  getV1LocationsLocationIdRouteHandler,
  getV1LocationsRouteHandler,
  getV1MeasurementsRouteHandler,
  getV1ParametersRouteHandler,
  getV1SourcesRouteHandler,
  getV2AveragesRouteHandler,
  getV2CitiesRouteHandler,
  getV2CountriesCountryIdRouteHandler,
  getV2CountriesRouteHandler,
  getV2LatestLocationIdRouteHandler,
  getV2LatestRouteHandler,
  getV2LocationsLocationIdRouteHandler,
  getV2LocationsRouteHandler,
  getV2LocationsTilesMobileGeneralizedTilesJsonRouteHandler,
  getV2LocationsTilesMobileGeneralizedZXYPbfRouteHandler,
  getV2LocationsTilesMobileTilesJsonRouteHandler,
  getV2LocationsTilesMobileZXYPbfRouteHandler,
  getV2LocationsTilesTilesJsonRouteHandler,
  getV2LocationsTilesViewerRouteHandler,
  getV2LocationsTilesZXYPbfRouteHandler,
  getV2ManufacturersRouteHandler,
  getV2MeasurementsRouteHandler,
  getV2ModelsRouteHandler,
  getV2ParametersRouteHandler,
  getV2ProjectsProjectIdRouteHandler,
  getV2ProjectsRouteHandler,
  getV2SourcesReadmeSlugRouteHandler,
  getV2SourcesRouteHandler,
  getV2SummaryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getFaviconIcoRoute, getFaviconIcoRouteHandler)
  .openapi(getPingRoute, getPingRouteHandler)
  .openapi(getV1CitiesRoute, getV1CitiesRouteHandler)
  .openapi(getV1CountriesRoute, getV1CountriesRouteHandler)
  .openapi(getV1CountriesCountryIdRoute, getV1CountriesCountryIdRouteHandler)
  .openapi(getV1LatestRoute, getV1LatestRouteHandler)
  .openapi(getV1LatestLocationIdRoute, getV1LatestLocationIdRouteHandler)
  .openapi(getV1LocationsRoute, getV1LocationsRouteHandler)
  .openapi(getV1LocationsLocationIdRoute, getV1LocationsLocationIdRouteHandler)
  .openapi(getV1MeasurementsRoute, getV1MeasurementsRouteHandler)
  .openapi(getV1ParametersRoute, getV1ParametersRouteHandler)
  .openapi(getV1SourcesRoute, getV1SourcesRouteHandler)
  .openapi(getV2AveragesRoute, getV2AveragesRouteHandler)
  .openapi(getV2CitiesRoute, getV2CitiesRouteHandler)
  .openapi(getV2CountriesRoute, getV2CountriesRouteHandler)
  .openapi(getV2CountriesCountryIdRoute, getV2CountriesCountryIdRouteHandler)
  .openapi(getV2LatestRoute, getV2LatestRouteHandler)
  .openapi(getV2LatestLocationIdRoute, getV2LatestLocationIdRouteHandler)
  .openapi(getV2LocationsRoute, getV2LocationsRouteHandler)
  .openapi(
    getV2LocationsTilesMobileGeneralizedTilesJsonRoute,
    getV2LocationsTilesMobileGeneralizedTilesJsonRouteHandler,
  )
  .openapi(
    getV2LocationsTilesMobileGeneralizedZXYPbfRoute,
    getV2LocationsTilesMobileGeneralizedZXYPbfRouteHandler,
  )
  .openapi(getV2LocationsTilesMobileTilesJsonRoute, getV2LocationsTilesMobileTilesJsonRouteHandler)
  .openapi(getV2LocationsTilesMobileZXYPbfRoute, getV2LocationsTilesMobileZXYPbfRouteHandler)
  .openapi(getV2LocationsTilesTilesJsonRoute, getV2LocationsTilesTilesJsonRouteHandler)
  .openapi(getV2LocationsTilesViewerRoute, getV2LocationsTilesViewerRouteHandler)
  .openapi(getV2LocationsTilesZXYPbfRoute, getV2LocationsTilesZXYPbfRouteHandler)
  .openapi(getV2LocationsLocationIdRoute, getV2LocationsLocationIdRouteHandler)
  .openapi(getV2ManufacturersRoute, getV2ManufacturersRouteHandler)
  .openapi(getV2MeasurementsRoute, getV2MeasurementsRouteHandler)
  .openapi(getV2ModelsRoute, getV2ModelsRouteHandler)
  .openapi(getV2ParametersRoute, getV2ParametersRouteHandler)
  .openapi(getV2ProjectsRoute, getV2ProjectsRouteHandler)
  .openapi(getV2ProjectsProjectIdRoute, getV2ProjectsProjectIdRouteHandler)
  .openapi(getV2SourcesRoute, getV2SourcesRouteHandler)
  .openapi(getV2SourcesReadmeSlugRoute, getV2SourcesReadmeSlugRouteHandler)
  .openapi(getV2SummaryRoute, getV2SummaryRouteHandler)

export default app
