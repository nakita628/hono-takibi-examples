import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWatchEpisodesPopularRoute,
  getWatchEpisodesRoute,
  getWatchPromosPopularRoute,
  getWatchPromosRoute,
} from '../routes'

export const getWatchEpisodesRouteHandler: RouteHandler<typeof getWatchEpisodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWatchEpisodesPopularRouteHandler: RouteHandler<
  typeof getWatchEpisodesPopularRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWatchPromosRouteHandler: RouteHandler<typeof getWatchPromosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getWatchPromosPopularRouteHandler: RouteHandler<
  typeof getWatchPromosPopularRoute
> = async (c) => {
  throw new Error('Not implemented')
}
