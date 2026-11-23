import type { RouteHandler } from '@hono/zod-openapi'
import type { getSpeciesRoute, getSpeciesSearchRoute, postSpeciesSearchRoute } from '../routes'

export const getSpeciesRouteHandler: RouteHandler<typeof getSpeciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSpeciesSearchRouteHandler: RouteHandler<typeof getSpeciesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSpeciesSearchRouteHandler: RouteHandler<typeof postSpeciesSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
