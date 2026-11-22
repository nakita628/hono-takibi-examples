import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adsHandler,
  analyticsHandler,
  bitsHandler,
  ccLsHandler,
  channelPointsHandler,
  channelsHandler,
  charityHandler,
  chatHandler,
  clipsHandler,
  conduitsHandler,
  entitlementsHandler,
  eventSubHandler,
  extensionsHandler,
  gamesHandler,
  goalsHandler,
  guestStarHandler,
  hypeTrainHandler,
  moderationHandler,
  pollsHandler,
  predictionsHandler,
  raidsHandler,
  scheduleHandler,
  searchHandler,
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
  .route('/', adsHandler)
  .route('/', analyticsHandler)
  .route('/', bitsHandler)
  .route('/', channelsHandler)
  .route('/', channelPointsHandler)
  .route('/', charityHandler)
  .route('/', chatHandler)
  .route('/', clipsHandler)
  .route('/', conduitsHandler)
  .route('/', ccLsHandler)
  .route('/', entitlementsHandler)
  .route('/', extensionsHandler)
  .route('/', eventSubHandler)
  .route('/', gamesHandler)
  .route('/', goalsHandler)
  .route('/', guestStarHandler)
  .route('/', hypeTrainHandler)
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
  .route('/', videosHandler)
  .route('/', whispersHandler)

export default app
