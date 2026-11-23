import type { RouteHandler } from '@hono/zod-openapi'
import type { postListAnomalyGroupTimeSeriesRoute } from '../routes'

export const postListAnomalyGroupTimeSeriesRouteHandler: RouteHandler<
  typeof postListAnomalyGroupTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
