import type { RouteHandler } from '@hono/zod-openapi'
import type { getMovieRoute, getMovieSearchRoute, postMovieSearchRoute } from '../routes'

export const getMovieRouteHandler: RouteHandler<typeof getMovieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMovieSearchRouteHandler: RouteHandler<typeof getMovieSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMovieSearchRouteHandler: RouteHandler<typeof postMovieSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
