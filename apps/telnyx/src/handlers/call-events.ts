import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallEventsRoute } from '../routes'

export const getCallEventsRouteHandler: RouteHandler<typeof getCallEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
