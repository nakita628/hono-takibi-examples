import type { RouteHandler } from '@hono/zod-openapi'
import type { getEpisodesIdRoute, getEpisodesRoute } from '../routes'

export const getEpisodesIdRouteHandler: RouteHandler<typeof getEpisodesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEpisodesRouteHandler: RouteHandler<typeof getEpisodesRoute> = async (c) => {
  throw new Error('Not implemented')
}
