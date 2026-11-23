import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenresMovieRoute, getGenresTvRoute } from '../routes'

export const getGenresMovieRouteHandler: RouteHandler<typeof getGenresMovieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenresTvRouteHandler: RouteHandler<typeof getGenresTvRoute> = async (c) => {
  throw new Error('Not implemented')
}
