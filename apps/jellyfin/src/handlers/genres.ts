import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGenresGenreNameRoute,
  getGenresNameImagesImageTypeImageIndexRoute,
  getGenresNameImagesImageTypeRoute,
  getGenresRoute,
  headGenresNameImagesImageTypeImageIndexRoute,
  headGenresNameImagesImageTypeRoute,
} from '../routes'

export const getGenresRouteHandler: RouteHandler<typeof getGenresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenresGenreNameRouteHandler: RouteHandler<typeof getGenresGenreNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGenresNameImagesImageTypeRouteHandler: RouteHandler<
  typeof getGenresNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headGenresNameImagesImageTypeRouteHandler: RouteHandler<
  typeof headGenresNameImagesImageTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGenresNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof getGenresNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headGenresNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof headGenresNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
