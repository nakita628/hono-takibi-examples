import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPeopleIdAnimeRoute,
  getPeopleIdFullRoute,
  getPeopleIdMangaRoute,
  getPeopleIdPicturesRoute,
  getPeopleIdRoute,
  getPeopleIdVoicesRoute,
  getPeopleRoute,
} from '../routes'

export const getPeopleIdFullRouteHandler: RouteHandler<typeof getPeopleIdFullRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdRouteHandler: RouteHandler<typeof getPeopleIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleIdAnimeRouteHandler: RouteHandler<typeof getPeopleIdAnimeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPeopleIdVoicesRouteHandler: RouteHandler<typeof getPeopleIdVoicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPeopleIdMangaRouteHandler: RouteHandler<typeof getPeopleIdMangaRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPeopleIdPicturesRouteHandler: RouteHandler<
  typeof getPeopleIdPicturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPeopleRouteHandler: RouteHandler<typeof getPeopleRoute> = async (c) => {
  throw new Error('Not implemented')
}
