import { OpenAPIHono } from '@hono/zod-openapi'
import {
  artistHandler,
  audioHandler,
  authenticationHandler,
  backupHandler,
  brandingHandler,
  channelHandler,
  collectionHandler,
  deviceHandler,
  displayPreferenceHandler,
  environmentHandler,
  filterHandler,
  genreHandler,
  imageHandler,
  instantMixHandler,
  itemLookupHandler,
  itemUpdateHandler,
  libraryHandler,
  libraryStructureHandler,
  liveTvHandler,
  localizationHandler,
  lyricHandler,
  mediaInfoHandler,
  mediaSegmentHandler,
  movieHandler,
  musicGenreHandler,
  personHandler,
  playlistHandler,
  pluginHandler,
  remoteImageHandler,
  scheduledTaskHandler,
  searchHandler,
  sessionHandler,
  showHandler,
  startupHandler,
  studioHandler,
  subtitleHandler,
  suggestionHandler,
  syncPlayHandler,
  systemHandler,
  trailerHandler,
  trickPlayHandler,
  userDataHandler,
  userHandler,
  userViewHandler,
  videoHandler,
  yearHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', systemHandler)
  .route('/', authenticationHandler)
  .route('/', artistHandler)
  .route('/', audioHandler)
  .route('/', backupHandler)
  .route('/', brandingHandler)
  .route('/', channelHandler)
  .route('/', collectionHandler)
  .route('/', pluginHandler)
  .route('/', deviceHandler)
  .route('/', displayPreferenceHandler)
  .route('/', environmentHandler)
  .route('/', filterHandler)
  .route('/', genreHandler)
  .route('/', imageHandler)
  .route('/', instantMixHandler)
  .route('/', itemLookupHandler)
  .route('/', libraryHandler)
  .route('/', userDataHandler)
  .route('/', itemUpdateHandler)
  .route('/', libraryStructureHandler)
  .route('/', liveTvHandler)
  .route('/', localizationHandler)
  .route('/', lyricHandler)
  .route('/', mediaInfoHandler)
  .route('/', mediaSegmentHandler)
  .route('/', movieHandler)
  .route('/', musicGenreHandler)
  .route('/', personHandler)
  .route('/', playlistHandler)
  .route('/', sessionHandler)
  .route('/', remoteImageHandler)
  .route('/', scheduledTaskHandler)
  .route('/', searchHandler)
  .route('/', startupHandler)
  .route('/', studioHandler)
  .route('/', subtitleHandler)
  .route('/', suggestionHandler)
  .route('/', syncPlayHandler)
  .route('/', trailerHandler)
  .route('/', trickPlayHandler)
  .route('/', showHandler)
  .route('/', userHandler)
  .route('/', userViewHandler)
  .route('/', videoHandler)
  .route('/', yearHandler)

export default app
