import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getArtistsAlbumArtistsRoute,
  getArtistsIdInstantMixRoute,
  getArtistsItemIdSimilarRoute,
  getArtistsNameImagesImageTypeImageIndexRoute,
  getArtistsNameRoute,
  getArtistsRoute,
  headArtistsNameImagesImageTypeImageIndexRoute,
} from '../routes'

export const getArtistsRouteHandler: RouteHandler<typeof getArtistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsAlbumArtistsRouteHandler: RouteHandler<
  typeof getArtistsAlbumArtistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsIdInstantMixRouteHandler: RouteHandler<
  typeof getArtistsIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsItemIdSimilarRouteHandler: RouteHandler<
  typeof getArtistsItemIdSimilarRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsNameRouteHandler: RouteHandler<typeof getArtistsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof getArtistsNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headArtistsNameImagesImageTypeImageIndexRouteHandler: RouteHandler<
  typeof headArtistsNameImagesImageTypeImageIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
