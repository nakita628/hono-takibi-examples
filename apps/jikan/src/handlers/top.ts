import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTopAnimeRoute,
  getTopCharactersRoute,
  getTopMangaRoute,
  getTopPeopleRoute,
  getTopReviewsRoute,
} from '../routes'

export const getTopAnimeRouteHandler: RouteHandler<typeof getTopAnimeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopMangaRouteHandler: RouteHandler<typeof getTopMangaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopPeopleRouteHandler: RouteHandler<typeof getTopPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTopCharactersRouteHandler: RouteHandler<typeof getTopCharactersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTopReviewsRouteHandler: RouteHandler<typeof getTopReviewsRoute> = async (c) => {
  throw new Error('Not implemented')
}
