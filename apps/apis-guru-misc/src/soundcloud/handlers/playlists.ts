import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdRepostersRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  postPlaylistsRoute,
  putPlaylistsPlaylistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(postPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdRepostersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
