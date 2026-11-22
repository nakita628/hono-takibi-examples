import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSongListsCommentsCommentIdRoute,
  deleteApiSongListsIdRoute,
  getApiSongListsFeaturedNamesRoute,
  getApiSongListsFeaturedRoute,
  getApiSongListsListIdCommentsRoute,
  getApiSongListsListIdSongsRoute,
  postApiSongListsCommentsCommentIdRoute,
  postApiSongListsListIdCommentsRoute,
  postApiSongListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const songListApiHandler = app
  .openapi(postApiSongListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongListsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongListsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsFeaturedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsFeaturedNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsListIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongListsListIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongListsListIdSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
