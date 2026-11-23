import type { RouteHandler } from '@hono/zod-openapi'
import type { getDraftPicksRoute, getDraftPositionsRoute, getDraftTeamsRoute } from '../routes'

export const getDraftPicksRouteHandler: RouteHandler<typeof getDraftPicksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDraftPositionsRouteHandler: RouteHandler<typeof getDraftPositionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDraftTeamsRouteHandler: RouteHandler<typeof getDraftTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
