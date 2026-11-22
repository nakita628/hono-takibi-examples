import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1UsersMeVideosImportsRoute,
  getApiV1VideoPlaylistsPlaylistIdVideosRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getApiV1UsersMeVideosImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPlaylistIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsPlaylistIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
