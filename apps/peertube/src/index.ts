import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abusesHandler,
  accountBlocklistHandler,
  accountsHandler,
  automaticTagsHandler,
  channelsSyncHandler,
  clientConfigHandler,
  configHandler,
  contactHandler,
  debugHandler,
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
  ownershipChangeHandler,
  playerSettingsHandler,
  pluginsHandler,
  registerHandler,
  runnerJobsHandler,
  runnerRegistrationTokenHandler,
  runnersHandler,
  searchHandler,
  serverBlocklistHandler,
  sessionHandler,
  staticVideoFilesHandler,
  statsHandler,
  userExportsHandler,
  userImportsHandler,
  usersHandler,
  videoBlocksHandler,
  videoCaptionsHandler,
  videoChannelsHandler,
  videoChaptersHandler,
  videoCommentsHandler,
  videoDownloadHandler,
  videoEmbedPrivacyHandler,
  videoFeedsHandler,
  videoFilesHandler,
  videoHandler,
  videoImportsHandler,
  videoMirroringHandler,
  videoPasswordsHandler,
  videoPlaylistsHandler,
  videoRatesHandler,
  videosHandler,
  videoStatsHandler,
  videoTranscodingHandler,
  watchedWordsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', staticVideoFilesHandler)
  .route('/', videoDownloadHandler)
  .route('/', videoFeedsHandler)
  .route('/', accountsHandler)
  .route('/', configHandler)
  .route('/', homepageHandler)
  .route('/', jobHandler)
  .route('/', instanceFollowsHandler)
  .route('/', usersHandler)
  .route('/', sessionHandler)
  .route('/', registerHandler)
  .route('/', userImportsHandler)
  .route('/', userExportsHandler)
  .route('/', myUserHandler)
  .route('/', videoCommentsHandler)
  .route('/', videosHandler)
  .route('/', mySubscriptionsHandler)
  .route('/', myNotificationsHandler)
  .route('/', myHistoryHandler)
  .route('/', ownershipChangeHandler)
  .route('/', videoHandler)
  .route('/', videoTranscodingHandler)
  .route('/', videoStatsHandler)
  .route('/', videoImportsHandler)
  .route('/', liveVideosHandler)
  .route('/', abusesHandler)
  .route('/', videoBlocksHandler)
  .route('/', videoCaptionsHandler)
  .route('/', videoChaptersHandler)
  .route('/', videoEmbedPrivacyHandler)
  .route('/', videoPasswordsHandler)
  .route('/', videoChannelsHandler)
  .route('/', videoPlaylistsHandler)
  .route('/', channelsSyncHandler)
  .route('/', playerSettingsHandler)
  .route('/', videoRatesHandler)
  .route('/', videoFilesHandler)
  .route('/', searchHandler)
  .route('/', accountBlocklistHandler)
  .route('/', serverBlocklistHandler)
  .route('/', instanceRedundancyHandler)
  .route('/', videoMirroringHandler)
  .route('/', statsHandler)
  .route('/', contactHandler)
  .route('/', debugHandler)
  .route('/', logsHandler)
  .route('/', pluginsHandler)
  .route('/', runnerRegistrationTokenHandler)
  .route('/', runnersHandler)
  .route('/', runnerJobsHandler)
  .route('/', automaticTagsHandler)
  .route('/', watchedWordsHandler)
  .route('/', clientConfigHandler)

export default app
