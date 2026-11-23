import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArtistsAlbumArtistsRoute,
  getArtistsIdInstantMixRoute,
  getArtistsItemIdSimilarRoute,
  getArtistsNameImagesImageTypeImageIndexRoute,
  getArtistsNameRoute,
  getArtistsRoute,
  headArtistsNameImagesImageTypeImageIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artistsHandler = app
  .openapi(getArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsAlbumArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsItemIdSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headArtistsNameImagesImageTypeImageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
