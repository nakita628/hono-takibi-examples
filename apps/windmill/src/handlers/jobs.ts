import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobsCompletedCountByTagRoute, getJobsDbClockRoute } from '../routes'

export const getJobsDbClockRouteHandler: RouteHandler<typeof getJobsDbClockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobsCompletedCountByTagRouteHandler: RouteHandler<
  typeof getJobsCompletedCountByTagRoute
> = async (c) => {
  throw new Error('Not implemented')
}
