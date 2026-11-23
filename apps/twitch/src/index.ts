import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  authorizationHandler,
  bitsHandler,
  channelPointsHandler,
  channelsHandler,
  charityHandler,
  chatHandler,
  clipsHandler,
  contentClassificationLabelsHandler,
  entitlementsHandler,
  eventsubHandler,
  extensionsHandler,
  gamesHandler,
  goalsHandler,
  guestStarHandler,
  hypetrainHandler,
  moderationHandler,
  pollsHandler,
  predictionsHandler,
  raidsHandler,
  scheduleHandler,
  searchHandler,
  sharedChatHandler,
  streamsHandler,
  subscriptionsHandler,
  tagsHandler,
  teamsHandler,
  usersHandler,
  videosHandler,
  whispersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', analyticsHandler)
  .route('/', bitsHandler)
  .route('/', extensionsHandler)
  .route('/', channelPointsHandler)
  .route('/', charityHandler)
  .route('/', chatHandler)
  .route('/', sharedChatHandler)
  .route('/', clipsHandler)
  .route('/', videosHandler)
  .route('/', eventsubHandler)
  .route('/', contentClassificationLabelsHandler)
  .route('/', entitlementsHandler)
  .route('/', gamesHandler)
  .route('/', goalsHandler)
  .route('/', guestStarHandler)
  .route('/', hypetrainHandler)
  .route('/', moderationHandler)
  .route('/', pollsHandler)
  .route('/', predictionsHandler)
  .route('/', raidsHandler)
  .route('/', scheduleHandler)
  .route('/', searchHandler)
  .route('/', streamsHandler)
  .route('/', subscriptionsHandler)
  .route('/', tagsHandler)
  .route('/', teamsHandler)
  .route('/', usersHandler)
  .route('/', authorizationHandler)
  .route('/', whispersHandler)

export default app
