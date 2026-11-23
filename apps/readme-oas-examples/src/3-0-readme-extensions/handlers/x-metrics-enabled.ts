import type { RouteHandler } from '@hono/zod-openapi'
import type { patchXMetricsEnabledRoute, postXMetricsEnabledRoute } from '../routes'

export const postXMetricsEnabledRouteHandler: RouteHandler<
  typeof postXMetricsEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchXMetricsEnabledRouteHandler: RouteHandler<
  typeof patchXMetricsEnabledRoute
> = async (c) => {
  throw new Error('Not implemented')
}
