import type { RouteHandler } from '@hono/zod-openapi'
import type { getShowsIdEpisodesRoute, getShowsIdRoute, getShowsRoute } from '../routes'

export const getShowsIdRouteHandler: RouteHandler<typeof getShowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsRouteHandler: RouteHandler<typeof getShowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsIdEpisodesRouteHandler: RouteHandler<typeof getShowsIdEpisodesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
