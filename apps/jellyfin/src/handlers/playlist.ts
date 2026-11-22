import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlaylistsPlaylistIdItemsRoute,
  deletePlaylistsPlaylistIdUsersUserIdRoute,
  getPlaylistsPlaylistIdItemsRoute,
  getPlaylistsPlaylistIdRoute,
  getPlaylistsPlaylistIdUsersRoute,
  getPlaylistsPlaylistIdUsersUserIdRoute,
  postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute,
  postPlaylistsPlaylistIdItemsRoute,
  postPlaylistsPlaylistIdRoute,
  postPlaylistsPlaylistIdUsersUserIdRoute,
  postPlaylistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistHandler = app
  .openapi(postPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdItemsItemIdMoveNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsPlaylistIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlaylistsPlaylistIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlaylistsPlaylistIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
