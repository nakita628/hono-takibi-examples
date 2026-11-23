import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwayHistoryRoute } from '../routes'

export const getGetPathwayHistoryRouteHandler: RouteHandler<
  typeof getGetPathwayHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
