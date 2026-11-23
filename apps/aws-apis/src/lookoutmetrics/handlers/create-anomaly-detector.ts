import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateAnomalyDetectorRoute } from '../routes'

export const postCreateAnomalyDetectorRouteHandler: RouteHandler<
  typeof postCreateAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
