import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamsRoute, getTeamsTeamIdMetricsRoute, getTeamsTeamIdRoute } from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdRouteHandler: RouteHandler<typeof getTeamsTeamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsTeamIdMetricsRouteHandler: RouteHandler<
  typeof getTeamsTeamIdMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
