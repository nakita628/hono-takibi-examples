import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsHandler,
  artistsHandler,
  audioHandler,
  authHandler,
  backupHandler,
  brandingHandler,
  channelsHandler,
  clientLogHandler,
  collectionsHandler,
  devicesHandler,
  displayPreferencesHandler,
  environmentHandler,
  fallbackFontHandler,
  genresHandler,
  getUtcTimeHandler,
  itemsHandler,
  librariesHandler,
  libraryHandler,
  liveStreamsHandler,
  liveTvHandler,
  localizationHandler,
  mediaSegmentsHandler,
  moviesHandler,
  musicGenresHandler,
  packagesHandler,
  personsHandler,
  playbackHandler,
  playlistsHandler,
  pluginsHandler,
  providersHandler,
  quickConnectHandler,
  repositoriesHandler,
  scheduledTasksHandler,
  searchHandler,
  sessionsHandler,
  showsHandler,
  songsHandler,
  startupHandler,
  studiosHandler,
  syncPlayHandler,
  systemHandler,
  trailersHandler,
  userFavoriteItemsHandler,
  userImageHandler,
  userItemsHandler,
  userPlayedItemsHandler,
  usersHandler,
  userViewsHandler,
  videosHandler,
  webHandler,
  yearsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', systemHandler)
  .route('/', authHandler)
  .route('/', artistsHandler)
  .route('/', audioHandler)
  .route('/', backupHandler)
  .route('/', brandingHandler)
  .route('/', channelsHandler)
  .route('/', clientLogHandler)
  .route('/', collectionsHandler)
  .route('/', webHandler)
  .route('/', devicesHandler)
  .route('/', displayPreferencesHandler)
  .route('/', environmentHandler)
  .route('/', itemsHandler)
  .route('/', genresHandler)
  .route('/', musicGenresHandler)
  .route('/', personsHandler)
  .route('/', studiosHandler)
  .route('/', userImageHandler)
  .route('/', albumsHandler)
  .route('/', playlistsHandler)
  .route('/', songsHandler)
  .route('/', userItemsHandler)
  .route('/', librariesHandler)
  .route('/', libraryHandler)
  .route('/', moviesHandler)
  .route('/', showsHandler)
  .route('/', trailersHandler)
  .route('/', liveTvHandler)
  .route('/', localizationHandler)
  .route('/', providersHandler)
  .route('/', liveStreamsHandler)
  .route('/', playbackHandler)
  .route('/', mediaSegmentsHandler)
  .route('/', packagesHandler)
  .route('/', repositoriesHandler)
  .route('/', sessionsHandler)
  .route('/', userPlayedItemsHandler)
  .route('/', pluginsHandler)
  .route('/', quickConnectHandler)
  .route('/', scheduledTasksHandler)
  .route('/', searchHandler)
  .route('/', startupHandler)
  .route('/', fallbackFontHandler)
  .route('/', videosHandler)
  .route('/', syncPlayHandler)
  .route('/', getUtcTimeHandler)
  .route('/', usersHandler)
  .route('/', userFavoriteItemsHandler)
  .route('/', userViewsHandler)
  .route('/', yearsHandler)

export default app
