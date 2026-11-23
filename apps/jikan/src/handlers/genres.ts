import type { RouteHandler } from '@hono/zod-openapi'
import type { getGenresAnimeRoute, getGenresMangaRoute } from '../routes'

export const getGenresAnimeRouteHandler: RouteHandler<typeof getGenresAnimeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenresMangaRouteHandler: RouteHandler<typeof getGenresMangaRoute> = async (c) => {
  throw new Error('Not implemented')
}
