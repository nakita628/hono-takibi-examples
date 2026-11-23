import type { RouteHandler } from '@hono/zod-openapi'
import type { getCalendarDatesExportIndexRoute, getCalendarDatesIndexRoute } from '../routes'

export const getCalendarDatesIndexRouteHandler: RouteHandler<
  typeof getCalendarDatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCalendarDatesExportIndexRouteHandler: RouteHandler<
  typeof getCalendarDatesExportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
