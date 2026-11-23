import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCountryCoverageCountriesCountryCodeRoute,
  getCountryCoverageRoute,
} from '../routes'

export const getCountryCoverageRouteHandler: RouteHandler<typeof getCountryCoverageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCountryCoverageCountriesCountryCodeRouteHandler: RouteHandler<
  typeof getCountryCoverageCountriesCountryCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
