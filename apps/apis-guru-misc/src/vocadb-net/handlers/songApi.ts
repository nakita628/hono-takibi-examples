import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiSongsCommentsCommentIdRoute,
  deleteApiSongsIdRoute,
  getApiSongsByPvRoute,
  getApiSongsHighlightedRoute,
  getApiSongsIdCommentsRoute,
  getApiSongsIdDerivedRoute,
  getApiSongsIdRatingsRoute,
  getApiSongsIdRelatedRoute,
  getApiSongsIdRoute,
  getApiSongsLyricsLyricsIdRoute,
  getApiSongsNamesRoute,
  getApiSongsRoute,
  getApiSongsTopRatedRoute,
  postApiSongsCommentsCommentIdRoute,
  postApiSongsIdCommentsRoute,
  postApiSongsIdRatingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const songApiHandler = app
  .openapi(getApiSongsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsByPvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsHighlightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsLyricsLyricsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsTopRatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSongsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdDerivedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSongsIdRatingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSongsIdRelatedRoute, (c) => {
    throw new Error('Not implemented')
  })
