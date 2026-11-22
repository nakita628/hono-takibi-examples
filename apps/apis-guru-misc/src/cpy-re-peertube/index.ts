import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abusesHandler,
  accountBlocksHandler,
  accountsHandler,
  channelsSyncHandler,
  configHandler,
  homepageHandler,
  instanceFollowsHandler,
  instanceRedundancyHandler,
  jobHandler,
  liveVideosHandler,
  logsHandler,
  myHistoryHandler,
  myNotificationsHandler,
  mySubscriptionsHandler,
  myUserHandler,
  pluginsHandler,
  registerHandler,
  searchHandler,
  serverBlocksHandler,
  sessionHandler,
  staticVideoFilesHandler,
  statsHandler,
  usersHandler,
  videoBlocksHandler,
  videoCaptionsHandler,
  videoChannelsHandler,
  videoCommentsHandler,
  videoFeedsHandler,
  videoFilesHandler,
  videoHandler,
  videoImportsHandler,
  videoMirroringHandler,
  videoOwnershipChangeHandler,
  videoPlaylistsHandler,
  videoRatesHandler,
  videosHandler,
  videoStatsHandler,
  videoTranscodingHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', abusesHandler)
  .route('/', accountsHandler)
  .route('/', videoChannelsHandler)
  .route('/', videoPlaylistsHandler)
  .route('/', accountBlocksHandler)
  .route('/', configHandler)
  .route('/', homepageHandler)
  .route('/', jobHandler)
  .route('/', statsHandler)
  .route('/', sessionHandler)
  .route('/', pluginsHandler)
  .route('/', searchHandler)
  .route('/', logsHandler)
  .route('/', serverBlocksHandler)
  .route('/', instanceFollowsHandler)
  .route('/', videoMirroringHandler)
  .route('/', instanceRedundancyHandler)
  .route('/', usersHandler)
  .route('/', myUserHandler)
  .route('/', myHistoryHandler)
  .route('/', myNotificationsHandler)
  .route('/', mySubscriptionsHandler)
  .route('/', videosHandler)
  .route('/', registerHandler)
  .route('/', channelsSyncHandler)
  .route('/', videoHandler)
  .route('/', videoBlocksHandler)
  .route('/', videoImportsHandler)
  .route('/', liveVideosHandler)
  .route('/', videoOwnershipChangeHandler)
  .route('/', videoCaptionsHandler)
  .route('/', videoCommentsHandler)
  .route('/', videoFilesHandler)
  .route('/', videoRatesHandler)
  .route('/', videoStatsHandler)
  .route('/', videoTranscodingHandler)
  .route('/', videoFeedsHandler)
  .route('/', staticVideoFilesHandler)

export default app
