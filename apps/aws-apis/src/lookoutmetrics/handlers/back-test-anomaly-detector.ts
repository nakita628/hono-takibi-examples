import type { RouteHandler } from '@hono/zod-openapi'
import type { postBackTestAnomalyDetectorRoute } from '../routes'

export const postBackTestAnomalyDetectorRouteHandler: RouteHandler<
  typeof postBackTestAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
