import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlbumsItemIdInstantMixRoute,
  getArtistsItemIdInstantMixRoute,
  getItemsItemIdInstantMixRoute,
  getMusicGenresInstantMixRoute,
  getMusicGenresNameInstantMixRoute,
  getPlaylistsItemIdInstantMixRoute,
  getSongsItemIdInstantMixRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instantMixHandler = app
  .openapi(getAlbumsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItemsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresNameInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMusicGenresInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSongsItemIdInstantMixRoute, (c) => {
    throw new Error('Not implemented')
  })
