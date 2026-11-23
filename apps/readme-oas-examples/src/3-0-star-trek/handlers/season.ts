import type { RouteHandler } from '@hono/zod-openapi'
import type { getSeasonRoute, getSeasonSearchRoute, postSeasonSearchRoute } from '../routes'

export const getSeasonRouteHandler: RouteHandler<typeof getSeasonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSeasonSearchRouteHandler: RouteHandler<typeof getSeasonSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSeasonSearchRouteHandler: RouteHandler<typeof postSeasonSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
