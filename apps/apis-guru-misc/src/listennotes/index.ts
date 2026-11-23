import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bestPodcastsHandler,
  curatedPodcastsHandler,
  episodesHandler,
  genresHandler,
  justListenHandler,
  languagesHandler,
  playlistsHandler,
  podcastsHandler,
  regionsHandler,
  relatedSearchesHandler,
  searchHandler,
  spellcheckHandler,
  trendingSearchesHandler,
  typeaheadHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bestPodcastsHandler)
  .route('/', curatedPodcastsHandler)
  .route('/', episodesHandler)
  .route('/', genresHandler)
  .route('/', justListenHandler)
  .route('/', languagesHandler)
  .route('/', playlistsHandler)
  .route('/', podcastsHandler)
  .route('/', regionsHandler)
  .route('/', relatedSearchesHandler)
  .route('/', searchHandler)
  .route('/', spellcheckHandler)
  .route('/', trendingSearchesHandler)
  .route('/', typeaheadHandler)

export default app
