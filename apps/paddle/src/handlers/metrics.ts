import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetricsActiveSubscribersRoute,
  getMetricsChargebacksRoute,
  getMetricsCheckoutConversionRoute,
  getMetricsExploreEntitiesRoute,
  getMetricsMonthlyRecurringRevenueChangeRoute,
  getMetricsMonthlyRecurringRevenueRoute,
  getMetricsRefundsRoute,
  getMetricsRevenueRoute,
  postMetricsExploreRoute,
} from '../routes'

export const getMetricsExploreEntitiesRouteHandler: RouteHandler<
  typeof getMetricsExploreEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetricsExploreRouteHandler: RouteHandler<typeof postMetricsExploreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetricsMonthlyRecurringRevenueRouteHandler: RouteHandler<
  typeof getMetricsMonthlyRecurringRevenueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsActiveSubscribersRouteHandler: RouteHandler<
  typeof getMetricsActiveSubscribersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsMonthlyRecurringRevenueChangeRouteHandler: RouteHandler<
  typeof getMetricsMonthlyRecurringRevenueChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsRevenueRouteHandler: RouteHandler<typeof getMetricsRevenueRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetricsRefundsRouteHandler: RouteHandler<typeof getMetricsRefundsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMetricsChargebacksRouteHandler: RouteHandler<
  typeof getMetricsChargebacksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsCheckoutConversionRouteHandler: RouteHandler<
  typeof getMetricsCheckoutConversionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
