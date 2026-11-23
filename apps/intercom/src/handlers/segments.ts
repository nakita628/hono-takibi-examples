import type { RouteHandler } from '@hono/zod-openapi'
import type { getSegmentsRoute, getSegmentsSegmentIdRoute } from '../routes'

export const getSegmentsRouteHandler: RouteHandler<typeof getSegmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSegmentsSegmentIdRouteHandler: RouteHandler<
  typeof getSegmentsSegmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
