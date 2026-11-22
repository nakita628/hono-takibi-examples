import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdItemsRoute,
  deletePlaylistsPlaylistIdTracksRoute,
  getBrowseCategoriesCategoryIdPlaylistsRoute,
  getBrowseFeaturedPlaylistsRoute,
  getMePlaylistsRoute,
  getPlaylistsPlaylistIdImagesRoute,
  getPlaylistsPlaylistIdItemsRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdTracksRoute,
  getUsersUserIdPlaylistsRoute,
  postMePlaylistsRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdTracksRoute,
  postUsersUserIdPlaylistsRoute,
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
  .openapi(getMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMePlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseFeaturedPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseCategoriesCategoryIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPlaylistsPlaylistIdImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
