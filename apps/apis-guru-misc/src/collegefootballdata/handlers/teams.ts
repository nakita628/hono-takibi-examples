import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamsFbsRoute, getTeamsMatchupRoute, getTeamsRoute } from '../routes'

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsFbsRouteHandler: RouteHandler<typeof getTeamsFbsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsMatchupRouteHandler: RouteHandler<typeof getTeamsMatchupRoute> = async (c) => {
  throw new Error('Not implemented')
}
