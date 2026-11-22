import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReferencesAircraftAircraftCodeRoute,
  getReferencesAirlinesAirlineCodeRoute,
  getReferencesAirportsAirportCodeRoute,
  getReferencesAirportsNearestLatitudeLongitudeRoute,
  getReferencesCitiesCityCodeRoute,
  getReferencesCountriesCountryCodeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const referenceDataHandler = app
  .openapi(getReferencesAircraftAircraftCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesAirlinesAirlineCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesAirportsNearestLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesAirportsAirportCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesCitiesCityCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReferencesCountriesCountryCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
