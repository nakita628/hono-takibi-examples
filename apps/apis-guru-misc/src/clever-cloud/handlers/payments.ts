import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentsAssetsPayButtonTokenButtonPngRoute,
  getPaymentsCouponsNameRoute,
  getPaymentsProvidersRoute,
  getPaymentsTokensStripeRoute,
  postPaymentsBidEndStripeRoute,
} from '../routes'

export const getPaymentsAssetsPayButtonTokenButtonPngRouteHandler: RouteHandler<
  typeof getPaymentsAssetsPayButtonTokenButtonPngRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsCouponsNameRouteHandler: RouteHandler<
  typeof getPaymentsCouponsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsProvidersRouteHandler: RouteHandler<
  typeof getPaymentsProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentsTokensStripeRouteHandler: RouteHandler<
  typeof getPaymentsTokensStripeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentsBidEndStripeRouteHandler: RouteHandler<
  typeof postPaymentsBidEndStripeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
