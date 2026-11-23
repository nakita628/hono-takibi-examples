import type { RouteHandler } from '@hono/zod-openapi'
import type { postDetectMetricSetConfigRoute } from '../routes'

export const postDetectMetricSetConfigRouteHandler: RouteHandler<
  typeof postDetectMetricSetConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
