import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdItemsRoute,
  getPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(postPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
