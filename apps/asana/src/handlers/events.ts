import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
