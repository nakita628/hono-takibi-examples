import type { RouteHandler } from '@hono/zod-openapi'
import type { getTracksIdRoute, getTracksRoute } from '../routes'

export const getTracksRouteHandler: RouteHandler<typeof getTracksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTracksIdRouteHandler: RouteHandler<typeof getTracksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
