import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdFollowersRoute,
  deletePlaylistsPlaylistIdItemsRoute,
  deletePlaylistsPlaylistIdTracksRoute,
  getPlaylistsPlaylistIdFollowersContainsRoute,
  getPlaylistsPlaylistIdImagesRoute,
  getPlaylistsPlaylistIdItemsRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdTracksRoute,
  putPlaylistsPlaylistIdFollowersRoute,
  putPlaylistsPlaylistIdImagesRoute,
  putPlaylistsPlaylistIdItemsRoute,
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
  .openapi(getPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdFollowersContainsRoute, (c) => {
    throw new Error('Not implemented')
  })
