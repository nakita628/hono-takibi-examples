import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1CountriesCountryKeyRoute, getV1CountriesRoute } from '../routes'

export const getV1CountriesRouteHandler: RouteHandler<typeof getV1CountriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CountriesCountryKeyRouteHandler: RouteHandler<
  typeof getV1CountriesCountryKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
