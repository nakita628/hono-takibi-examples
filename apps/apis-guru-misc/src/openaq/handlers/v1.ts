import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CountriesCountryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LatestLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
