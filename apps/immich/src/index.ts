import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  adminHandler,
  albumsHandler,
  apiKeysHandler,
  assetFilesHandler,
  assetsHandler,
  authHandler,
  clusterGroupsHandler,
  configHandler,
  downloadHandler,
  duplicatesHandler,
  facesHandler,
  jobsHandler,
  librariesHandler,
  mapHandler,
  memoriesHandler,
  notificationsHandler,
  oauthHandler,
  partnersHandler,
  passkeysHandler,
  peopleHandler,
  pluginsHandler,
  publicHandler,
  queuesHandler,
  searchHandler,
  serverHandler,
  sessionsHandler,
  sharedLinksHandler,
  stacksHandler,
  syncHandler,
  systemConfigHandler,
  systemMetadataHandler,
  tagsHandler,
  timelineHandler,
  trashHandler,
  usersHandler,
  viewHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activitiesHandler)
  .route('/', adminHandler)
  .route('/', albumsHandler)
  .route('/', apiKeysHandler)
  .route('/', assetFilesHandler)
  .route('/', assetsHandler)
  .route('/', authHandler)
  .route('/', clusterGroupsHandler)
  .route('/', configHandler)
  .route('/', downloadHandler)
  .route('/', duplicatesHandler)
  .route('/', facesHandler)
  .route('/', jobsHandler)
  .route('/', librariesHandler)
  .route('/', mapHandler)
  .route('/', memoriesHandler)
  .route('/', notificationsHandler)
  .route('/', oauthHandler)
  .route('/', partnersHandler)
  .route('/', passkeysHandler)
  .route('/', peopleHandler)
  .route('/', pluginsHandler)
  .route('/', publicHandler)
  .route('/', queuesHandler)
  .route('/', searchHandler)
  .route('/', serverHandler)
  .route('/', sessionsHandler)
  .route('/', sharedLinksHandler)
  .route('/', stacksHandler)
  .route('/', syncHandler)
  .route('/', systemConfigHandler)
  .route('/', systemMetadataHandler)
  .route('/', tagsHandler)
  .route('/', timelineHandler)
  .route('/', trashHandler)
  .route('/', usersHandler)
  .route('/', viewHandler)
  .route('/', workflowsHandler)

export default app
