import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsIdRoute } from '../routes'

export const getEventsIdRouteHandler: RouteHandler<typeof getEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
