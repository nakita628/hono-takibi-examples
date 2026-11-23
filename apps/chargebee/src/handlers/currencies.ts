import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCurrenciesListRoute,
  getCurrenciesSiteCurrencyIdRoute,
  postCurrenciesRoute,
  postCurrenciesSiteCurrencyIdAddScheduleRoute,
  postCurrenciesSiteCurrencyIdRemoveScheduleRoute,
  postCurrenciesSiteCurrencyIdRoute,
} from '../routes'

export const postCurrenciesSiteCurrencyIdAddScheduleRouteHandler: RouteHandler<
  typeof postCurrenciesSiteCurrencyIdAddScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCurrenciesRouteHandler: RouteHandler<typeof postCurrenciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCurrenciesSiteCurrencyIdRouteHandler: RouteHandler<
  typeof getCurrenciesSiteCurrencyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCurrenciesSiteCurrencyIdRouteHandler: RouteHandler<
  typeof postCurrenciesSiteCurrencyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCurrenciesSiteCurrencyIdRemoveScheduleRouteHandler: RouteHandler<
  typeof postCurrenciesSiteCurrencyIdRemoveScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCurrenciesListRouteHandler: RouteHandler<typeof getCurrenciesListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
