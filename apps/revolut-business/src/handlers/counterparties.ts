import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCounterpartiesCountriesRoute,
  getCounterpartiesFieldsRoute,
  getCounterpartiesRoute,
  patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute,
} from '../routes'

export const getCounterpartiesRouteHandler: RouteHandler<typeof getCounterpartiesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCounterpartiesCountriesRouteHandler: RouteHandler<
  typeof getCounterpartiesCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCounterpartiesFieldsRouteHandler: RouteHandler<
  typeof getCounterpartiesFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRouteHandler: RouteHandler<
  typeof patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
