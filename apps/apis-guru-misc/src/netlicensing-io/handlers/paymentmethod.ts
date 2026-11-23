import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentmethodPaymentMethodNumberRoute,
  getPaymentmethodRoute,
  postPaymentmethodPaymentMethodNumberRoute,
} from '../routes'

export const getPaymentmethodRouteHandler: RouteHandler<typeof getPaymentmethodRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentmethodPaymentMethodNumberRouteHandler: RouteHandler<
  typeof getPaymentmethodPaymentMethodNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPaymentmethodPaymentMethodNumberRouteHandler: RouteHandler<
  typeof postPaymentmethodPaymentMethodNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
