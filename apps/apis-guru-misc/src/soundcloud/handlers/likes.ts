import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLikesPlaylistsPlaylistIdRoute,
  deleteLikesTracksTrackIdRoute,
  postLikesPlaylistsPlaylistIdRoute,
  postLikesTracksTrackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const likesHandler = app
  .openapi(deleteLikesPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLikesPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLikesTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLikesTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
