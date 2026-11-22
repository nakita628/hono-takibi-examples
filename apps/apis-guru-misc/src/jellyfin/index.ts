import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityLogHandler,
  apiKeyHandler,
  artistsHandler,
  audioHandler,
  brandingHandler,
  channelsHandler,
  collectionHandler,
  configurationHandler,
  dashboardHandler,
  devicesHandler,
  displayPreferencesHandler,
  dlnaHandler,
  dlnaServerHandler,
  dynamicHlsHandler,
  environmentHandler,
  filterHandler,
  genresHandler,
  hlsSegmentHandler,
  imageByNameHandler,
  imageHandler,
  instantMixHandler,
  itemLookupHandler,
  itemRefreshHandler,
  itemsHandler,
  itemUpdateHandler,
  libraryHandler,
  libraryStructureHandler,
  liveTvHandler,
  localizationHandler,
  mediaInfoHandler,
  moviesHandler,
  musicGenresHandler,
  notificationsHandler,
  packageHandler,
  personsHandler,
  playlistsHandler,
  playstateHandler,
  pluginsHandler,
  quickConnectHandler,
  remoteImageHandler,
  scheduledTasksHandler,
  searchHandler,
  sessionHandler,
  startupHandler,
  studiosHandler,
  subtitleHandler,
  suggestionsHandler,
  syncPlayHandler,
  systemHandler,
  timeSyncHandler,
  trailersHandler,
  tvShowsHandler,
  universalAudioHandler,
  userHandler,
  userLibraryHandler,
  userViewsHandler,
  videoAttachmentsHandler,
  videoHlsHandler,
  videosHandler,
  yearsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', instantMixHandler)
  .route('/', libraryHandler)
  .route('/', artistsHandler)
  .route('/', imageHandler)
  .route('/', hlsSegmentHandler)
  .route('/', dynamicHlsHandler)
  .route('/', audioHandler)
  .route('/', universalAudioHandler)
  .route('/', apiKeyHandler)
  .route('/', sessionHandler)
  .route('/', brandingHandler)
  .route('/', channelsHandler)
  .route('/', collectionHandler)
  .route('/', devicesHandler)
  .route('/', displayPreferencesHandler)
  .route('/', dlnaHandler)
  .route('/', dlnaServerHandler)
  .route('/', environmentHandler)
  .route('/', subtitleHandler)
  .route('/', genresHandler)
  .route('/', timeSyncHandler)
  .route('/', imageByNameHandler)
  .route('/', remoteImageHandler)
  .route('/', itemsHandler)
  .route('/', filterHandler)
  .route('/', itemLookupHandler)
  .route('/', itemUpdateHandler)
  .route('/', mediaInfoHandler)
  .route('/', itemRefreshHandler)
  .route('/', libraryStructureHandler)
  .route('/', liveTvHandler)
  .route('/', localizationHandler)
  .route('/', moviesHandler)
  .route('/', musicGenresHandler)
  .route('/', notificationsHandler)
  .route('/', packageHandler)
  .route('/', personsHandler)
  .route('/', playlistsHandler)
  .route('/', pluginsHandler)
  .route('/', quickConnectHandler)
  .route('/', scheduledTasksHandler)
  .route('/', searchHandler)
  .route('/', playstateHandler)
  .route('/', tvShowsHandler)
  .route('/', startupHandler)
  .route('/', studiosHandler)
  .route('/', syncPlayHandler)
  .route('/', activityLogHandler)
  .route('/', configurationHandler)
  .route('/', systemHandler)
  .route('/', trailersHandler)
  .route('/', userHandler)
  .route('/', userLibraryHandler)
  .route('/', userViewsHandler)
  .route('/', suggestionsHandler)
  .route('/', videosHandler)
  .route('/', videoHlsHandler)
  .route('/', videoAttachmentsHandler)
  .route('/', yearsHandler)
  .route('/', dashboardHandler)

export default app
