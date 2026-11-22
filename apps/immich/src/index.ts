import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  albumsHandler,
  apiKeysHandler,
  assetFilesHandler,
  assetsHandler,
  authenticationAdminHandler,
  authenticationHandler,
  clusterGroupsHandler,
  configAdminHandler,
  configPublicHandler,
  configUserHandler,
  databaseBackupsAdminHandler,
  downloadHandler,
  duplicatesHandler,
  facesHandler,
  jobsHandler,
  librariesHandler,
  maintenanceAdminHandler,
  mapHandler,
  memoriesHandler,
  notificationsAdminHandler,
  notificationsHandler,
  partnersHandler,
  passkeysHandler,
  peopleHandler,
  pluginsHandler,
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
  usersAdminHandler,
  usersHandler,
  viewsHandler,
  workflowsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activitiesHandler)
  .route('/', authenticationAdminHandler)
  .route('/', configAdminHandler)
  .route('/', databaseBackupsAdminHandler)
  .route('/', maintenanceAdminHandler)
  .route('/', notificationsAdminHandler)
  .route('/', usersAdminHandler)
  .route('/', albumsHandler)
  .route('/', apiKeysHandler)
  .route('/', assetFilesHandler)
  .route('/', assetsHandler)
  .route('/', authenticationHandler)
  .route('/', clusterGroupsHandler)
  .route('/', configUserHandler)
  .route('/', downloadHandler)
  .route('/', duplicatesHandler)
  .route('/', facesHandler)
  .route('/', jobsHandler)
  .route('/', librariesHandler)
  .route('/', mapHandler)
  .route('/', memoriesHandler)
  .route('/', notificationsHandler)
  .route('/', partnersHandler)
  .route('/', passkeysHandler)
  .route('/', peopleHandler)
  .route('/', pluginsHandler)
  .route('/', configPublicHandler)
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
  .route('/', viewsHandler)
  .route('/', workflowsHandler)

export default app
