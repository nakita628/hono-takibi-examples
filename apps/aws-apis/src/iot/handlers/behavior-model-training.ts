import type { RouteHandler } from '@hono/zod-openapi'
import type { getBehaviorModelTrainingSummariesRoute } from '../routes'

export const getBehaviorModelTrainingSummariesRouteHandler: RouteHandler<
  typeof getBehaviorModelTrainingSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
