import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateMetricSetRoute } from '../routes'

export const postCreateMetricSetRouteHandler: RouteHandler<
  typeof postCreateMetricSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
