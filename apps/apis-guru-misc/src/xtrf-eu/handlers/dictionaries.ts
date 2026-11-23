import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDictionariesActiveRoute,
  getDictionariesAllRoute,
  getDictionariesCurrencyIsoCodeExchangeRateRoute,
  getDictionariesTypeActiveRoute,
  getDictionariesTypeAllRoute,
  getDictionariesTypeIdRoute,
  postDictionariesCurrencyIsoCodeExchangeRateRoute,
} from '../routes'

export const getDictionariesActiveRouteHandler: RouteHandler<
  typeof getDictionariesActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDictionariesAllRouteHandler: RouteHandler<typeof getDictionariesAllRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDictionariesCurrencyIsoCodeExchangeRateRouteHandler: RouteHandler<
  typeof getDictionariesCurrencyIsoCodeExchangeRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDictionariesCurrencyIsoCodeExchangeRateRouteHandler: RouteHandler<
  typeof postDictionariesCurrencyIsoCodeExchangeRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDictionariesTypeActiveRouteHandler: RouteHandler<
  typeof getDictionariesTypeActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDictionariesTypeAllRouteHandler: RouteHandler<
  typeof getDictionariesTypeAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDictionariesTypeIdRouteHandler: RouteHandler<
  typeof getDictionariesTypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
