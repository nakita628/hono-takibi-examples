import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEarningsRatesEarningsRateIDRoute,
  getEarningsRatesRoute,
  postEarningsRatesRoute,
} from '../routes'

export const getEarningsRatesRouteHandler: RouteHandler<typeof getEarningsRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEarningsRatesRouteHandler: RouteHandler<typeof postEarningsRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEarningsRatesEarningsRateIDRouteHandler: RouteHandler<
  typeof getEarningsRatesEarningsRateIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
