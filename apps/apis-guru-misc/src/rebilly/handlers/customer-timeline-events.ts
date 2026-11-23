import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerTimelineEventsRoute } from '../routes'

export const getCustomerTimelineEventsRouteHandler: RouteHandler<
  typeof getCustomerTimelineEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
