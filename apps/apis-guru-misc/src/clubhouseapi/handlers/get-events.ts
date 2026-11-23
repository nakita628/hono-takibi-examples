import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetEventsRoute } from '../routes'

export const getGetEventsRouteHandler: RouteHandler<typeof getGetEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
