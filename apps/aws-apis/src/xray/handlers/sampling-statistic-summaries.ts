import type { RouteHandler } from '@hono/zod-openapi'
import type { postSamplingStatisticSummariesRoute } from '../routes'

export const postSamplingStatisticSummariesRouteHandler: RouteHandler<
  typeof postSamplingStatisticSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
