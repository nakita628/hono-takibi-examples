import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLocaleCodesRoute,
  getLocaleContinentsRoute,
  getLocaleCountriesEuRoute,
  getLocaleCountriesPhonesRoute,
  getLocaleCountriesRoute,
  getLocaleCurrenciesRoute,
  getLocaleLanguagesRoute,
  getLocaleRoute,
} from '../routes'

export const getLocaleRouteHandler: RouteHandler<typeof getLocaleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleCodesRouteHandler: RouteHandler<typeof getLocaleCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleContinentsRouteHandler: RouteHandler<
  typeof getLocaleContinentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleCountriesRouteHandler: RouteHandler<typeof getLocaleCountriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLocaleCountriesEuRouteHandler: RouteHandler<
  typeof getLocaleCountriesEuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleCountriesPhonesRouteHandler: RouteHandler<
  typeof getLocaleCountriesPhonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleCurrenciesRouteHandler: RouteHandler<
  typeof getLocaleCurrenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLocaleLanguagesRouteHandler: RouteHandler<typeof getLocaleLanguagesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
