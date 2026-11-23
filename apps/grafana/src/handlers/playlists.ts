import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsUidRoute,
  getPlaylistsRoute,
  getPlaylistsUidItemsRoute,
  getPlaylistsUidRoute,
  postPlaylistsRoute,
  putPlaylistsUidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(getPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsUidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
