import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindingIdAnalyzerArnRoute, postFindingRoute, putFindingRoute } from '../routes'

export const getFindingIdAnalyzerArnRouteHandler: RouteHandler<
  typeof getFindingIdAnalyzerArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFindingRouteHandler: RouteHandler<typeof postFindingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFindingRouteHandler: RouteHandler<typeof putFindingRoute> = async (c) => {
  throw new Error('Not implemented')
}
