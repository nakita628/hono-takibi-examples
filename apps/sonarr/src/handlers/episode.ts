import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3EpisodeIdRoute,
  getApiV3EpisodeRoute,
  putApiV3EpisodeIdRoute,
  putApiV3EpisodeMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const episodeHandler = app
  .openapi(getApiV3EpisodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3EpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3EpisodeMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
