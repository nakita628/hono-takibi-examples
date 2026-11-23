import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPlayersPlayerIdOrSlugMatchesRoute,
  getPlayersPlayerIdOrSlugRoute,
  getPlayersRoute,
} from '../routes'

export const getPlayersRouteHandler: RouteHandler<typeof getPlayersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayersPlayerIdOrSlugRouteHandler: RouteHandler<
  typeof getPlayersPlayerIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPlayersPlayerIdOrSlugMatchesRouteHandler: RouteHandler<
  typeof getPlayersPlayerIdOrSlugMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
