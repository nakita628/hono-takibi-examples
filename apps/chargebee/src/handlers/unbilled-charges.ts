import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUnbilledChargesRoute,
  postUnbilledChargesInvoiceNowEstimateRoute,
  postUnbilledChargesInvoiceUnbilledChargesRoute,
  postUnbilledChargesRoute,
  postUnbilledChargesUnbilledChargeIdDeleteRoute,
} from '../routes'

export const postUnbilledChargesUnbilledChargeIdDeleteRouteHandler: RouteHandler<
  typeof postUnbilledChargesUnbilledChargeIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUnbilledChargesInvoiceNowEstimateRouteHandler: RouteHandler<
  typeof postUnbilledChargesInvoiceNowEstimateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUnbilledChargesInvoiceUnbilledChargesRouteHandler: RouteHandler<
  typeof postUnbilledChargesInvoiceUnbilledChargesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUnbilledChargesRouteHandler: RouteHandler<typeof getUnbilledChargesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postUnbilledChargesRouteHandler: RouteHandler<
  typeof postUnbilledChargesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
