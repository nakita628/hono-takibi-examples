import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetricsConformanceAggregateRoute,
  getMetricsConformanceServiceServiceIdRoute,
  getMetricsInvocationsGlobalLatestRoute,
  getMetricsInvocationsGlobalRoute,
  getMetricsInvocationsServiceNameServiceVersionRoute,
  getMetricsInvocationsTopRoute,
  getMetricsTestsLatestRoute,
} from '../routes'

export const getMetricsConformanceAggregateRouteHandler: RouteHandler<
  typeof getMetricsConformanceAggregateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsConformanceServiceServiceIdRouteHandler: RouteHandler<
  typeof getMetricsConformanceServiceServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsInvocationsGlobalRouteHandler: RouteHandler<
  typeof getMetricsInvocationsGlobalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsInvocationsGlobalLatestRouteHandler: RouteHandler<
  typeof getMetricsInvocationsGlobalLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsInvocationsTopRouteHandler: RouteHandler<
  typeof getMetricsInvocationsTopRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsInvocationsServiceNameServiceVersionRouteHandler: RouteHandler<
  typeof getMetricsInvocationsServiceNameServiceVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsTestsLatestRouteHandler: RouteHandler<
  typeof getMetricsTestsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
