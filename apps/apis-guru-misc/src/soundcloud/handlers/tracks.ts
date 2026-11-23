import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTracksTrackIdRoute,
  getTracksRoute,
  getTracksTrackIdCommentsRoute,
  getTracksTrackIdFavoritersRoute,
  getTracksTrackIdRelatedRoute,
  getTracksTrackIdRepostersRoute,
  getTracksTrackIdRoute,
  getTracksTrackIdStreamsRoute,
  postTracksRoute,
  postTracksTrackIdCommentsRoute,
  putTracksTrackIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tracksHandler = app
  .openapi(getTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTracksTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTracksTrackIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdFavoritersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdRepostersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksTrackIdStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
