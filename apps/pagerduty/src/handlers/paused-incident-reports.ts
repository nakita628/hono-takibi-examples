import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPausedIncidentReportsAlertsRoute,
  getPausedIncidentReportsCountsRoute,
} from '../routes'

export const getPausedIncidentReportsAlertsRouteHandler: RouteHandler<
  typeof getPausedIncidentReportsAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPausedIncidentReportsCountsRouteHandler: RouteHandler<
  typeof getPausedIncidentReportsCountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
