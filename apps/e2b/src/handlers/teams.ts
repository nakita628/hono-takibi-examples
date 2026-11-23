import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamsTeamIDMetricsMaxRoute, getTeamsTeamIDMetricsRoute } from '../routes'

export const getTeamsTeamIDMetricsRouteHandler: RouteHandler<
  typeof getTeamsTeamIDMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIDMetricsMaxRouteHandler: RouteHandler<
  typeof getTeamsTeamIDMetricsMaxRoute
> = async (c) => {
  throw new Error('Not implemented')
}
