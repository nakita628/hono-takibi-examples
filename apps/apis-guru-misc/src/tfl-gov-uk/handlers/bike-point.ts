import type { RouteHandler } from '@hono/zod-openapi'
import type { getBikePointIdRoute, getBikePointRoute, getBikePointSearchRoute } from '../routes'

export const getBikePointRouteHandler: RouteHandler<typeof getBikePointRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBikePointSearchRouteHandler: RouteHandler<typeof getBikePointSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBikePointIdRouteHandler: RouteHandler<typeof getBikePointIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
