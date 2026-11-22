import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  activityHandler,
  adminHandler,
  annotationHandler,
  bookHandler,
  cblHandler,
  chapterHandler,
  collectionHandler,
  colorScapeHandler,
  deviceHandler,
  downloadHandler,
  emailHandler,
  filterHandler,
  fontHandler,
  healthHandler,
  imageHandler,
  kavitaPlusAuditHandler,
  koboAnnotationHandler,
  koboHandler,
  koreaderHandler,
  libraryHandler,
  licenseHandler,
  localeHandler,
  manageHandler,
  metadataHandler,
  oAuthHandler,
  oidcHandler,
  opdsHandler,
  panelsHandler,
  personHandler,
  pluginHandler,
  ratingHandler,
  readerHandler,
  readingListHandler,
  readingProfileHandler,
  reviewHandler,
  scrobblingHandler,
  searchHandler,
  seriesHandler,
  serverHandler,
  settingsHandler,
  statsHandler,
  streamHandler,
  tachiyomiHandler,
  themeHandler,
  uploadHandler,
  usersHandler,
  volumeHandler,
  wantToReadHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', activityHandler)
  .route('/', adminHandler)
  .route('/', annotationHandler)
  .route('/', bookHandler)
  .route('/', cblHandler)
  .route('/', chapterHandler)
  .route('/', collectionHandler)
  .route('/', colorScapeHandler)
  .route('/', deviceHandler)
  .route('/', downloadHandler)
  .route('/', emailHandler)
  .route('/', filterHandler)
  .route('/', fontHandler)
  .route('/', healthHandler)
  .route('/', imageHandler)
  .route('/', kavitaPlusAuditHandler)
  .route('/', koboHandler)
  .route('/', koboAnnotationHandler)
  .route('/', koreaderHandler)
  .route('/', libraryHandler)
  .route('/', licenseHandler)
  .route('/', localeHandler)
  .route('/', manageHandler)
  .route('/', metadataHandler)
  .route('/', oAuthHandler)
  .route('/', oidcHandler)
  .route('/', opdsHandler)
  .route('/', panelsHandler)
  .route('/', personHandler)
  .route('/', pluginHandler)
  .route('/', ratingHandler)
  .route('/', readerHandler)
  .route('/', readingListHandler)
  .route('/', readingProfileHandler)
  .route('/', reviewHandler)
  .route('/', scrobblingHandler)
  .route('/', searchHandler)
  .route('/', seriesHandler)
  .route('/', serverHandler)
  .route('/', settingsHandler)
  .route('/', statsHandler)
  .route('/', streamHandler)
  .route('/', tachiyomiHandler)
  .route('/', themeHandler)
  .route('/', uploadHandler)
  .route('/', usersHandler)
  .route('/', volumeHandler)
  .route('/', wantToReadHandler)

export default app
