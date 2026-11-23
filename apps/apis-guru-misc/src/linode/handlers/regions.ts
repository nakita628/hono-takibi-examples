import type { RouteHandler } from '@hono/zod-openapi'
import type { getRegionsRegionIdRoute, getRegionsRoute } from '../routes'

export const getRegionsRouteHandler: RouteHandler<typeof getRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegionsRegionIdRouteHandler: RouteHandler<typeof getRegionsRegionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
