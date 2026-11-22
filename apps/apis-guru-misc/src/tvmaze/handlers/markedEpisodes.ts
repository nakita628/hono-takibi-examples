import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserEpisodesEpisodeIdRoute,
  getUserEpisodesEpisodeIdRoute,
  getUserEpisodesRoute,
  putUserEpisodesEpisodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const markedEpisodesHandler = app
  .openapi(getUserEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
