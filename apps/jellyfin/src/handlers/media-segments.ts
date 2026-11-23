import type { RouteHandler } from '@hono/zod-openapi'
import type { getMediaSegmentsItemIdRoute } from '../routes'

export const getMediaSegmentsItemIdRouteHandler: RouteHandler<
  typeof getMediaSegmentsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
