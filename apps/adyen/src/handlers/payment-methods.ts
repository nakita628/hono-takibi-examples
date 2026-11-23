import type { RouteHandler } from '@hono/zod-openapi'
import type { postPaymentMethodsBalanceRoute, postPaymentMethodsRoute } from '../routes'

export const postPaymentMethodsRouteHandler: RouteHandler<typeof postPaymentMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPaymentMethodsBalanceRouteHandler: RouteHandler<
  typeof postPaymentMethodsBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
