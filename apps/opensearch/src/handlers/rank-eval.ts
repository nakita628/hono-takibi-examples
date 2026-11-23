import type { RouteHandler } from '@hono/zod-openapi'
import type { getRankEvalRoute, postRankEvalRoute } from '../routes'

export const getRankEvalRouteHandler: RouteHandler<typeof getRankEvalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRankEvalRouteHandler: RouteHandler<typeof postRankEvalRoute> = async (c) => {
  throw new Error('Not implemented')
}
