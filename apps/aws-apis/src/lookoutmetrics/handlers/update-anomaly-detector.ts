import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAnomalyDetectorRoute } from '../routes'

export const postUpdateAnomalyDetectorRouteHandler: RouteHandler<
  typeof postUpdateAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
