import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserVotesEpisodesEpisodeIdRoute,
  getUserVotesEpisodesEpisodeIdRoute,
  getUserVotesEpisodesRoute,
  putUserVotesEpisodesEpisodeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const votedEpisodesHandler = app
  .openapi(getUserVotesEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserVotesEpisodesEpisodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
