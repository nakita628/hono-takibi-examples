import type { RouteHandler } from '@hono/zod-openapi'
import type { postActivateAnomalyDetectorRoute } from '../routes'

export const postActivateAnomalyDetectorRouteHandler: RouteHandler<
  typeof postActivateAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
