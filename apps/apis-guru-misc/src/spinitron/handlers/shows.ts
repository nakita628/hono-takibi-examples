import type { RouteHandler } from '@hono/zod-openapi'
import type { getShowsIdRoute, getShowsRoute } from '../routes'

export const getShowsRouteHandler: RouteHandler<typeof getShowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShowsIdRouteHandler: RouteHandler<typeof getShowsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
