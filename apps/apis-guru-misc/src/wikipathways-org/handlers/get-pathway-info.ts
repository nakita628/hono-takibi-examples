import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetPathwayInfoRoute } from '../routes'

export const getGetPathwayInfoRouteHandler: RouteHandler<typeof getGetPathwayInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
