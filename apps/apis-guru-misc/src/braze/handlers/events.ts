import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsDataSeriesRoute, getEventsListRoute } from '../routes'

export const getEventsDataSeriesRouteHandler: RouteHandler<
  typeof getEventsDataSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsListRouteHandler: RouteHandler<typeof getEventsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
