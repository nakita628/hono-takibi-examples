import type { RouteHandler } from '@hono/zod-openapi'
import type { getFeedbackFeedbackIdRoute } from '../routes'

export const getFeedbackFeedbackIdRouteHandler: RouteHandler<
  typeof getFeedbackFeedbackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
