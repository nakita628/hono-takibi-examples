import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLocalizationCountriesRoute,
  getLocalizationCulturesRoute,
  getLocalizationOptionsRoute,
  getLocalizationParentalRatingsRoute,
} from '../routes'

export const getLocalizationCountriesRouteHandler: RouteHandler<
  typeof getLocalizationCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocalizationCulturesRouteHandler: RouteHandler<
  typeof getLocalizationCulturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocalizationOptionsRouteHandler: RouteHandler<
  typeof getLocalizationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocalizationParentalRatingsRouteHandler: RouteHandler<
  typeof getLocalizationParentalRatingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
