import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReferencesAircraftAircraftCodeRoute,
  getReferencesAirlinesAirlineCodeRoute,
  getReferencesAirportsAirportCodeRoute,
  getReferencesAirportsNearestLatitudeLongitudeRoute,
  getReferencesCitiesCityCodeRoute,
  getReferencesCountriesCountryCodeRoute,
} from '../routes'

export const getReferencesAircraftAircraftCodeRouteHandler: RouteHandler<
  typeof getReferencesAircraftAircraftCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesAirlinesAirlineCodeRouteHandler: RouteHandler<
  typeof getReferencesAirlinesAirlineCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesAirportsNearestLatitudeLongitudeRouteHandler: RouteHandler<
  typeof getReferencesAirportsNearestLatitudeLongitudeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesAirportsAirportCodeRouteHandler: RouteHandler<
  typeof getReferencesAirportsAirportCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesCitiesCityCodeRouteHandler: RouteHandler<
  typeof getReferencesCitiesCityCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReferencesCountriesCountryCodeRouteHandler: RouteHandler<
  typeof getReferencesCountriesCountryCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
