import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateMetricSetRoute } from '../routes'

export const postUpdateMetricSetRouteHandler: RouteHandler<
  typeof postUpdateMetricSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
