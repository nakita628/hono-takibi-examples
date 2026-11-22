import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdTracksRoute,
  getBrowseCategoriesCategoryIdPlaylistsRoute,
  getBrowseFeaturedPlaylistsRoute,
  getMePlaylistsRoute,
  getPlaylistsPlaylistIdImagesRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  getUsersUserIdPlaylistsRoute,
  postPlaylistsPlaylistIdTracksRoute,
  postUsersUserIdPlaylistsRoute,
  putPlaylistsPlaylistIdImagesRoute,
  putPlaylistsPlaylistIdRoute,
  putPlaylistsPlaylistIdTracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(getBrowseCategoriesCategoryIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseFeaturedPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdRoute, (c) => {
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
  .openapi(getUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
