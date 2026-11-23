import { OpenAPIHono } from '@hono/zod-openapi'
import {
  albumsHandler,
  artistsHandler,
  audioHandler,
  authHandler,
  brandingHandler,
  channelsHandler,
  collectionsHandler,
  devicesHandler,
  displayPreferencesHandler,
  dlnaHandler,
  environmentHandler,
  fallbackFontHandler,
  genresHandler,
  getUtcTimeHandler,
  imagesHandler,
  itemsHandler,
  librariesHandler,
  libraryHandler,
  liveStreamsHandler,
  liveTvHandler,
  localizationHandler,
  moviesHandler,
  musicGenresHandler,
  notificationsHandler,
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
  usersHandler,
  videosHandler,
  webHandler,
  yearsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', albumsHandler)
  .route('/', artistsHandler)
  .route('/', audioHandler)
  .route('/', authHandler)
  .route('/', brandingHandler)
  .route('/', channelsHandler)
  .route('/', collectionsHandler)
  .route('/', devicesHandler)
  .route('/', displayPreferencesHandler)
  .route('/', dlnaHandler)
  .route('/', environmentHandler)
  .route('/', fallbackFontHandler)
  .route('/', genresHandler)
  .route('/', getUtcTimeHandler)
  .route('/', imagesHandler)
  .route('/', itemsHandler)
  .route('/', librariesHandler)
  .route('/', libraryHandler)
  .route('/', liveStreamsHandler)
  .route('/', liveTvHandler)
  .route('/', localizationHandler)
  .route('/', moviesHandler)
  .route('/', musicGenresHandler)
  .route('/', notificationsHandler)
  .route('/', packagesHandler)
  .route('/', personsHandler)
  .route('/', playbackHandler)
  .route('/', playlistsHandler)
  .route('/', pluginsHandler)
  .route('/', providersHandler)
  .route('/', quickConnectHandler)
  .route('/', repositoriesHandler)
  .route('/', scheduledTasksHandler)
  .route('/', searchHandler)
  .route('/', sessionsHandler)
  .route('/', showsHandler)
  .route('/', songsHandler)
  .route('/', startupHandler)
  .route('/', studiosHandler)
  .route('/', syncPlayHandler)
  .route('/', systemHandler)
  .route('/', trailersHandler)
  .route('/', usersHandler)
  .route('/', videosHandler)
  .route('/', yearsHandler)
  .route('/', webHandler)

export default app
