import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentReceiptsLagoIdRoute, getPaymentReceiptsRoute } from '../routes'

export const getPaymentReceiptsRouteHandler: RouteHandler<typeof getPaymentReceiptsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentReceiptsLagoIdRouteHandler: RouteHandler<
  typeof getPaymentReceiptsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
