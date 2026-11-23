import type { RouteHandler } from '@hono/zod-openapi'
import type { getGeoIPRoute } from '../routes'

export const getGeoIPRouteHandler: RouteHandler<typeof getGeoIPRoute> = async (c) => {
  throw new Error('Not implemented')
}
