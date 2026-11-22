import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getArtistsIdAlbumsRoute,
  getArtistsIdRelatedArtistsRoute,
  getArtistsIdRoute,
  getArtistsIdTopTracksRoute,
  getArtistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artistsHandler = app
  .openapi(getArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdRelatedArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdTopTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
