import type { RouteHandler } from '@hono/zod-openapi'
import type { getZoneRoute } from '../routes'

export const getZoneRouteHandler: RouteHandler<typeof getZoneRoute> = async (c) => {
  throw new Error('Not implemented')
}
