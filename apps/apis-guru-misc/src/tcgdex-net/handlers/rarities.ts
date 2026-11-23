import type { RouteHandler } from '@hono/zod-openapi'
import type { getRaritiesRarityRoute, getRaritiesRoute } from '../routes'

export const getRaritiesRouteHandler: RouteHandler<typeof getRaritiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRaritiesRarityRouteHandler: RouteHandler<typeof getRaritiesRarityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
