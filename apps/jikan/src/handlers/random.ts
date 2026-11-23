import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRandomAnimeRoute,
  getRandomCharactersRoute,
  getRandomMangaRoute,
  getRandomPeopleRoute,
  getRandomUsersRoute,
} from '../routes'

export const getRandomAnimeRouteHandler: RouteHandler<typeof getRandomAnimeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRandomMangaRouteHandler: RouteHandler<typeof getRandomMangaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRandomCharactersRouteHandler: RouteHandler<
  typeof getRandomCharactersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRandomPeopleRouteHandler: RouteHandler<typeof getRandomPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRandomUsersRouteHandler: RouteHandler<typeof getRandomUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}
