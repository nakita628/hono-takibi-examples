import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  followedNetworksHandler,
  followedPeopleHandler,
  followedShowsHandler,
  followedWebchannelsHandler,
  markedEpisodesHandler,
  scrobblingHandler,
  taggedShowsHandler,
  votedEpisodesHandler,
  votedShowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', scrobblingHandler)
  .route('/', markedEpisodesHandler)
  .route('/', followedNetworksHandler)
  .route('/', followedPeopleHandler)
  .route('/', followedShowsHandler)
  .route('/', followedWebchannelsHandler)
  .route('/', taggedShowsHandler)
  .route('/', votedEpisodesHandler)
  .route('/', votedShowsHandler)

export default app
