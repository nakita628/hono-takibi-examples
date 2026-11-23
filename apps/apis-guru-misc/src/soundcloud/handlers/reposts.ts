import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepostsPlaylistsPlaylistIdRoute,
  deleteRepostsTracksTrackIdRoute,
  postRepostsPlaylistsPlaylistIdRoute,
  postRepostsTracksTrackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repostsHandler = app
  .openapi(deleteRepostsPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepostsPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepostsTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepostsTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
