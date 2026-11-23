import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCharactersIdAnimeRoute,
  getCharactersIdFullRoute,
  getCharactersIdMangaRoute,
  getCharactersIdPicturesRoute,
  getCharactersIdRoute,
  getCharactersIdVoicesRoute,
  getCharactersRoute,
} from '../routes'

export const getCharactersIdFullRouteHandler: RouteHandler<
  typeof getCharactersIdFullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersIdRouteHandler: RouteHandler<typeof getCharactersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersIdAnimeRouteHandler: RouteHandler<
  typeof getCharactersIdAnimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersIdMangaRouteHandler: RouteHandler<
  typeof getCharactersIdMangaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersIdVoicesRouteHandler: RouteHandler<
  typeof getCharactersIdVoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersIdPicturesRouteHandler: RouteHandler<
  typeof getCharactersIdPicturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCharactersRouteHandler: RouteHandler<typeof getCharactersRoute> = async (c) => {
  throw new Error('Not implemented')
}
