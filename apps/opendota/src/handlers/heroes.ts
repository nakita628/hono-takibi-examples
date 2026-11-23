import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHeroesHeroIdDurationsRoute,
  getHeroesHeroIdItemPopularityRoute,
  getHeroesHeroIdMatchesRoute,
  getHeroesHeroIdMatchupsRoute,
  getHeroesHeroIdPlayersRoute,
  getHeroesRoute,
} from '../routes'

export const getHeroesRouteHandler: RouteHandler<typeof getHeroesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHeroesHeroIdMatchesRouteHandler: RouteHandler<
  typeof getHeroesHeroIdMatchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHeroesHeroIdMatchupsRouteHandler: RouteHandler<
  typeof getHeroesHeroIdMatchupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHeroesHeroIdDurationsRouteHandler: RouteHandler<
  typeof getHeroesHeroIdDurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHeroesHeroIdPlayersRouteHandler: RouteHandler<
  typeof getHeroesHeroIdPlayersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHeroesHeroIdItemPopularityRouteHandler: RouteHandler<
  typeof getHeroesHeroIdItemPopularityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
