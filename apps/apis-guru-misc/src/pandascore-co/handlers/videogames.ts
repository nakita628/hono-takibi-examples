import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVideogamesRoute,
  getVideogamesVideogameIdOrSlugLeaguesRoute,
  getVideogamesVideogameIdOrSlugRoute,
  getVideogamesVideogameIdOrSlugSeriesRoute,
  getVideogamesVideogameIdOrSlugTournamentsRoute,
  getVideogamesVideogameIdOrSlugVersionsRoute,
} from '../routes'

export const getVideogamesRouteHandler: RouteHandler<typeof getVideogamesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideogamesVideogameIdOrSlugRouteHandler: RouteHandler<
  typeof getVideogamesVideogameIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideogamesVideogameIdOrSlugLeaguesRouteHandler: RouteHandler<
  typeof getVideogamesVideogameIdOrSlugLeaguesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideogamesVideogameIdOrSlugSeriesRouteHandler: RouteHandler<
  typeof getVideogamesVideogameIdOrSlugSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideogamesVideogameIdOrSlugTournamentsRouteHandler: RouteHandler<
  typeof getVideogamesVideogameIdOrSlugTournamentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVideogamesVideogameIdOrSlugVersionsRouteHandler: RouteHandler<
  typeof getVideogamesVideogameIdOrSlugVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
