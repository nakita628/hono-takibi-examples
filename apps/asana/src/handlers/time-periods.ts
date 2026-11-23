import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimePeriodsRoute, getTimePeriodsTimePeriodGidRoute } from '../routes'

export const getTimePeriodsTimePeriodGidRouteHandler: RouteHandler<
  typeof getTimePeriodsTimePeriodGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimePeriodsRouteHandler: RouteHandler<typeof getTimePeriodsRoute> = async (c) => {
  throw new Error('Not implemented')
}
