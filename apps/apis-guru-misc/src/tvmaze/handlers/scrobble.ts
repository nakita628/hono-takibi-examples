import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScrobbleShowsShowIdRoute,
  postScrobbleEpisodesRoute,
  postScrobbleShowsRoute,
  putScrobbleEpisodesEpisodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scrobbleHandler = app
  .openapi(postScrobbleEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putScrobbleEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrobbleShowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScrobbleShowsShowIdRoute, (c) => {
    throw new Error('Not implemented')
  })
