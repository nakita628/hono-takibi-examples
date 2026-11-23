import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChargeMetricsDataChargeMetricsDiscountAllocationDetailRoute,
  getChargeMetricsDataChargeMetricsRoute,
} from '../routes'

export const getChargeMetricsDataChargeMetricsRouteHandler: RouteHandler<
  typeof getChargeMetricsDataChargeMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChargeMetricsDataChargeMetricsDiscountAllocationDetailRouteHandler: RouteHandler<
  typeof getChargeMetricsDataChargeMetricsDiscountAllocationDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
