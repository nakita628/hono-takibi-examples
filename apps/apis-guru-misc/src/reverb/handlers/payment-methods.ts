import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentMethodsRoute } from '../routes'

export const getPaymentMethodsRouteHandler: RouteHandler<typeof getPaymentMethodsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
