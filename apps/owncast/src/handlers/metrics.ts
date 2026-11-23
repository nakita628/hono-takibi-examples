import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMetricsCmcdRoute,
  optionsMetricsCmcdRoute,
  postMetricsCmcdRoute,
  postMetricsPlaybackRoute,
} from '../routes'

export const postMetricsCmcdRouteHandler: RouteHandler<typeof postMetricsCmcdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetricsCmcdRouteHandler: RouteHandler<typeof getMetricsCmcdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsMetricsCmcdRouteHandler: RouteHandler<typeof optionsMetricsCmcdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMetricsPlaybackRouteHandler: RouteHandler<
  typeof postMetricsPlaybackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
