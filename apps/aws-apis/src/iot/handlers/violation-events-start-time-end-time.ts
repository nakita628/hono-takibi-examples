import type { RouteHandler } from '@hono/zod-openapi'
import type { getViolationEventsStartTimeEndTimeRoute } from '../routes'

export const getViolationEventsStartTimeEndTimeRouteHandler: RouteHandler<
  typeof getViolationEventsStartTimeEndTimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
