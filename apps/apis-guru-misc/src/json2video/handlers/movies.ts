import type { RouteHandler } from '@hono/zod-openapi'
import type { getMoviesRoute, postMoviesRoute } from '../routes'

export const getMoviesRouteHandler: RouteHandler<typeof getMoviesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMoviesRouteHandler: RouteHandler<typeof postMoviesRoute> = async (c) => {
  throw new Error('Not implemented')
}
