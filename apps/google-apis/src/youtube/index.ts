import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abuseReportsHandler,
  activitiesHandler,
  captionsHandler,
  channelBannersHandler,
  channelSectionsHandler,
  channelsHandler,
  commentsHandler,
  commentThreadsHandler,
  i18nLanguagesHandler,
  i18nRegionsHandler,
  liveBroadcastsHandler,
  liveChatBansHandler,
  liveChatMessagesHandler,
  liveChatModeratorsHandler,
  liveStreamsHandler,
  membersHandler,
  membershipsLevelsHandler,
  playlistItemsHandler,
  playlistsHandler,
  searchHandler,
  subscriptionsHandler,
  superChatEventsHandler,
  testsHandler,
  thirdPartyLinksHandler,
  thumbnailsHandler,
  videoAbuseReportReasonsHandler,
  videoCategoriesHandler,
  videosHandler,
  watermarksHandler,
  youtubeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', abuseReportsHandler)
  .route('/', activitiesHandler)
  .route('/', captionsHandler)
  .route('/', channelBannersHandler)
  .route('/', channelSectionsHandler)
  .route('/', channelsHandler)
  .route('/', commentThreadsHandler)
  .route('/', youtubeHandler)
  .route('/', commentsHandler)
  .route('/', i18nLanguagesHandler)
  .route('/', i18nRegionsHandler)
  .route('/', liveBroadcastsHandler)
  .route('/', liveChatBansHandler)
  .route('/', liveChatMessagesHandler)
  .route('/', liveChatModeratorsHandler)
  .route('/', liveStreamsHandler)
  .route('/', membersHandler)
  .route('/', membershipsLevelsHandler)
  .route('/', playlistItemsHandler)
  .route('/', playlistsHandler)
  .route('/', searchHandler)
  .route('/', subscriptionsHandler)
  .route('/', superChatEventsHandler)
  .route('/', testsHandler)
  .route('/', thirdPartyLinksHandler)
  .route('/', thumbnailsHandler)
  .route('/', videoAbuseReportReasonsHandler)
  .route('/', videoCategoriesHandler)
  .route('/', videosHandler)
  .route('/', watermarksHandler)

export default app
