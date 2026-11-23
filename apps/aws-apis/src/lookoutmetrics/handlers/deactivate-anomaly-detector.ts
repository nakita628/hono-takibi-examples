import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeactivateAnomalyDetectorRoute } from '../routes'

export const postDeactivateAnomalyDetectorRouteHandler: RouteHandler<
  typeof postDeactivateAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
