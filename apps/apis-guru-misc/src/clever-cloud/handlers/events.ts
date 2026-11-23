import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsEventSocketRoute } from '../routes'

export const getEventsEventSocketRouteHandler: RouteHandler<
  typeof getEventsEventSocketRoute
> = async (c) => {
  throw new Error('Not implemented')
}
