import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getV1CitiesRouteHandler: RouteHandler<typeof getV1CitiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CountriesRouteHandler: RouteHandler<typeof getV1CountriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CountriesCountryIdRouteHandler: RouteHandler<
  typeof getV1CountriesCountryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LatestRouteHandler: RouteHandler<typeof getV1LatestRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LatestLocationIdRouteHandler: RouteHandler<
  typeof getV1LatestLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LocationsRouteHandler: RouteHandler<typeof getV1LocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1LocationsLocationIdRouteHandler: RouteHandler<
  typeof getV1LocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1MeasurementsRouteHandler: RouteHandler<typeof getV1MeasurementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParametersRouteHandler: RouteHandler<typeof getV1ParametersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SourcesRouteHandler: RouteHandler<typeof getV1SourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}
