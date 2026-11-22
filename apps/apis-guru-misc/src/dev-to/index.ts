import { OpenAPIHono } from '@hono/zod-openapi'
import {
  articlesHandler,
  commentsHandler,
  displayAdsHandler,
  followedTagsHandler,
  followersHandler,
  organizationsHandler,
  pagesHandler,
  podcastEpisodesHandler,
  profileImagesHandler,
  reactionsHandler,
  readinglistHandler,
  tagsHandler,
  usersHandler,
  videosHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', usersHandler)
  .route('/', articlesHandler)
  .route('/', commentsHandler)
  .route('/', displayAdsHandler)
  .route('/', followersHandler)
  .route('/', followedTagsHandler)
  .route('/', organizationsHandler)
  .route('/', pagesHandler)
  .route('/', podcastEpisodesHandler)
  .route('/', profileImagesHandler)
  .route('/', reactionsHandler)
  .route('/', readinglistHandler)
  .route('/', tagsHandler)
  .route('/', videosHandler)

export default app
