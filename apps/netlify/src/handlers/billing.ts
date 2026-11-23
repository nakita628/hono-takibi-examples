import type { RouteHandler } from '@hono/zod-openapi'
import type { getBillingPaymentMethodsRoute } from '../routes'

export const getBillingPaymentMethodsRouteHandler: RouteHandler<
  typeof getBillingPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
