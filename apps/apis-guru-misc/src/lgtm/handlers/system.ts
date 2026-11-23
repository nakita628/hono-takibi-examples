import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSystemHealthRoute,
  getSystemMetricsMetricIdRoute,
  getSystemMetricsRoute,
} from '../routes'

export const getSystemHealthRouteHandler: RouteHandler<typeof getSystemHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSystemMetricsRouteHandler: RouteHandler<typeof getSystemMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSystemMetricsMetricIdRouteHandler: RouteHandler<
  typeof getSystemMetricsMetricIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
