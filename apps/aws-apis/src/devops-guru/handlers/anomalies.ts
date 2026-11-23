import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnomaliesIdRoute, postAnomaliesInsightInsightIdRoute } from '../routes'

export const getAnomaliesIdRouteHandler: RouteHandler<typeof getAnomaliesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnomaliesInsightInsightIdRouteHandler: RouteHandler<
  typeof postAnomaliesInsightInsightIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
