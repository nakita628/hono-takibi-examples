import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwayRoute } from '../routes'

export const getGetPathwayRouteHandler: RouteHandler<typeof getGetPathwayRoute> = async (c) => {
  throw new Error('Not implemented')
}
