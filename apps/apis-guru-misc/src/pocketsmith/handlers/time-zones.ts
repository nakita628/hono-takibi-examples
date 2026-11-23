import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimeZonesRoute } from '../routes'

export const getTimeZonesRouteHandler: RouteHandler<typeof getTimeZonesRoute> = async (c) => {
  throw new Error('Not implemented')
}
