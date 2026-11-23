import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEpisodesPidNextRoute,
  getEpisodesPidPostrollsRoute,
  getEpisodesPidPrerollsRoute,
  getEpisodesPidRecommendationsRoute,
  getEpisodesPidRoute,
} from '../routes'

export const getEpisodesPidRouteHandler: RouteHandler<typeof getEpisodesPidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesPidNextRouteHandler: RouteHandler<typeof getEpisodesPidNextRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getEpisodesPidPostrollsRouteHandler: RouteHandler<
  typeof getEpisodesPidPostrollsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesPidPrerollsRouteHandler: RouteHandler<
  typeof getEpisodesPidPrerollsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesPidRecommendationsRouteHandler: RouteHandler<
  typeof getEpisodesPidRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
