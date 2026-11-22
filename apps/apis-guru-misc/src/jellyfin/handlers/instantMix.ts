import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlbumsIdInstantMixRoute,
  getArtistsIdInstantMixRoute,
  getItemsIdInstantMixRoute,
  getMusicGenresIdInstantMixRoute,
  getMusicGenresNameInstantMixRoute,
  getPlaylistsIdInstantMixRoute,
  getSongsIdInstantMixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instantMixHandler = app
  .openapi(getAlbumsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSongsIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
