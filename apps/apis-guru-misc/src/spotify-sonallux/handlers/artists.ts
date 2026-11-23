import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getArtistsIdAlbumsRoute,
  getArtistsIdRelatedArtistsRoute,
  getArtistsIdRoute,
  getArtistsIdTopTracksRoute,
  getArtistsRoute,
} from '../routes'

export const getArtistsRouteHandler: RouteHandler<typeof getArtistsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsIdRouteHandler: RouteHandler<typeof getArtistsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsIdAlbumsRouteHandler: RouteHandler<typeof getArtistsIdAlbumsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getArtistsIdRelatedArtistsRouteHandler: RouteHandler<
  typeof getArtistsIdRelatedArtistsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getArtistsIdTopTracksRouteHandler: RouteHandler<
  typeof getArtistsIdTopTracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
