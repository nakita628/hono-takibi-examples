import { OpenAPIHono } from '@hono/zod-openapi'
import {
  announcementsHandler,
  apiKeysHandler,
  bookPagesHandler,
  bookPosterHandler,
  booksHandler,
  claimHandler,
  clientSettingsHandler,
  collectionPosterHandler,
  collectionSeriesHandler,
  collectionsHandler,
  comicRackHandler,
  currentUserHandler,
  deprecatedHandler,
  duplicatePagesHandler,
  fileSystemHandler,
  fontsHandler,
  historyHandler,
  importHandler,
  librariesHandler,
  managementHandler,
  mihonHandler,
  oAuth2Handler,
  readlistBooksHandler,
  readlistPosterHandler,
  readlistsHandler,
  referentialMetadataHandler,
  releasesHandler,
  seriesHandler,
  seriesPosterHandler,
  serverSettingsHandler,
  syncPointsHandler,
  tasksHandler,
  userSessionHandler,
  usersHandler,
  webPubManifestHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', managementHandler)
  .route('/', userSessionHandler)
  .route('/', deprecatedHandler)
  .route('/', announcementsHandler)
  .route('/', booksHandler)
  .route('/', importHandler)
  .route('/', bookPosterHandler)
  .route('/', webPubManifestHandler)
  .route('/', bookPagesHandler)
  .route('/', claimHandler)
  .route('/', clientSettingsHandler)
  .route('/', collectionsHandler)
  .route('/', collectionSeriesHandler)
  .route('/', collectionPosterHandler)
  .route('/', fileSystemHandler)
  .route('/', fontsHandler)
  .route('/', historyHandler)
  .route('/', librariesHandler)
  .route('/', oAuth2Handler)
  .route('/', duplicatePagesHandler)
  .route('/', readlistsHandler)
  .route('/', comicRackHandler)
  .route('/', readlistBooksHandler)
  .route('/', mihonHandler)
  .route('/', readlistPosterHandler)
  .route('/', releasesHandler)
  .route('/', seriesHandler)
  .route('/', seriesPosterHandler)
  .route('/', serverSettingsHandler)
  .route('/', syncPointsHandler)
  .route('/', tasksHandler)
  .route('/', referentialMetadataHandler)
  .route('/', usersHandler)
  .route('/', currentUserHandler)
  .route('/', apiKeysHandler)

export default app
