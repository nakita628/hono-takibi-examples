import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteAnomalyDetectorRoute } from '../routes'

export const postDeleteAnomalyDetectorRouteHandler: RouteHandler<
  typeof postDeleteAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
