import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPaymentRequestsLagoIdRoute,
  getPaymentRequestsRoute,
  postPaymentRequestsRoute,
} from '../routes'

export const postPaymentRequestsRouteHandler: RouteHandler<
  typeof postPaymentRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPaymentRequestsRouteHandler: RouteHandler<typeof getPaymentRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPaymentRequestsLagoIdRouteHandler: RouteHandler<
  typeof getPaymentRequestsLagoIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
