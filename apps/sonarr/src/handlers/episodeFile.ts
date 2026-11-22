import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3EpisodefileBulkRoute,
  deleteApiV3EpisodefileIdRoute,
  getApiV3EpisodefileIdRoute,
  getApiV3EpisodefileRoute,
  putApiV3EpisodefileBulkRoute,
  putApiV3EpisodefileEditorRoute,
  putApiV3EpisodefileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodeFileHandler = app
  .openapi(getApiV3EpisodefileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodefileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileEditorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3EpisodefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodefileBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
