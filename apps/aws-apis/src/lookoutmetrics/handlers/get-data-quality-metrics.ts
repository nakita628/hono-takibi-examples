import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDataQualityMetricsRoute } from '../routes'

export const postGetDataQualityMetricsRouteHandler: RouteHandler<
  typeof postGetDataQualityMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
