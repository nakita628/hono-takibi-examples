import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetricsCurrentInstanceIdRoute,
  postMetricsDataRoute,
  postMetricsHistoricalInstanceIdRoute,
  postMetricsUserdataInstanceIdRoute,
} from '../routes'

export const postMetricsCurrentInstanceIdRouteHandler: RouteHandler<
  typeof postMetricsCurrentInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetricsUserdataInstanceIdRouteHandler: RouteHandler<
  typeof postMetricsUserdataInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetricsHistoricalInstanceIdRouteHandler: RouteHandler<
  typeof postMetricsHistoricalInstanceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetricsDataRouteHandler: RouteHandler<typeof postMetricsDataRoute> = async (c) => {
  throw new Error('Not implemented')
}
