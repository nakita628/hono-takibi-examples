import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdFollowersRoute,
  deletePlaylistsPlaylistIdTracksRoute,
  getPlaylistsPlaylistIdFollowersContainsRoute,
  getPlaylistsPlaylistIdImagesRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  postPlaylistsPlaylistIdTracksRoute,
  putPlaylistsPlaylistIdFollowersRoute,
  putPlaylistsPlaylistIdImagesRoute,
  putPlaylistsPlaylistIdRoute,
  putPlaylistsPlaylistIdTracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(getPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdFollowersContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
