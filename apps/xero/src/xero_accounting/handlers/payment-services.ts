import type { RouteHandler } from '@hono/zod-openapi'
import type { getPaymentServicesRoute, putPaymentServicesRoute } from '../routes'

export const getPaymentServicesRouteHandler: RouteHandler<typeof getPaymentServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPaymentServicesRouteHandler: RouteHandler<typeof putPaymentServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
