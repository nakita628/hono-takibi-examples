import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2AveragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CountriesCountryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LatestLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesMobileGeneralizedTilesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesMobileGeneralizedZXYPbfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesMobileTilesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesMobileZXYPbfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesTilesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesViewerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsTilesZXYPbfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ManufacturersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SourcesReadmeSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
