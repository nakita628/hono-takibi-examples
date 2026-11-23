import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsFilenameRoute,
  deleteDatabasesIdRoute,
  getAnnouncementsIdRoute,
  getAnnouncementsRoute,
  getArrRoute,
  getBackupsFilenameRoute,
  getBackupsRoute,
  getBackupsSettingsRoute,
  getDatabasesIdRoute,
  getDatabasesRoute,
  getHealthRoute,
  getJobsIdRoute,
  getOpenapiJsonRoute,
  getStatusRoute,
  patchBackupsSettingsRoute,
  patchDatabasesIdRoute,
  postBackupsRoute,
  postBackupsUploadRoute,
  postDatabasesIdSyncRoute,
  postDatabasesRoute,
} from './routes'
import {
  deleteBackupsFilenameRouteHandler,
  deleteDatabasesIdRouteHandler,
  getAnnouncementsIdRouteHandler,
  getAnnouncementsRouteHandler,
  getArrRouteHandler,
  getBackupsFilenameRouteHandler,
  getBackupsRouteHandler,
  getBackupsSettingsRouteHandler,
  getDatabasesIdRouteHandler,
  getDatabasesRouteHandler,
  getHealthRouteHandler,
  getJobsIdRouteHandler,
  getOpenapiJsonRouteHandler,
  getStatusRouteHandler,
  patchBackupsSettingsRouteHandler,
  patchDatabasesIdRouteHandler,
  postBackupsRouteHandler,
  postBackupsUploadRouteHandler,
  postDatabasesIdSyncRouteHandler,
  postDatabasesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getArrRoute, getArrRouteHandler)
  .openapi(getDatabasesRoute, getDatabasesRouteHandler)
  .openapi(postDatabasesRoute, postDatabasesRouteHandler)
  .openapi(getDatabasesIdRoute, getDatabasesIdRouteHandler)
  .openapi(patchDatabasesIdRoute, patchDatabasesIdRouteHandler)
  .openapi(deleteDatabasesIdRoute, deleteDatabasesIdRouteHandler)
  .openapi(postDatabasesIdSyncRoute, postDatabasesIdSyncRouteHandler)
  .openapi(getHealthRoute, getHealthRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getOpenapiJsonRoute, getOpenapiJsonRouteHandler)
  .openapi(getJobsIdRoute, getJobsIdRouteHandler)
  .openapi(getBackupsRoute, getBackupsRouteHandler)
  .openapi(postBackupsRoute, postBackupsRouteHandler)
  .openapi(getBackupsFilenameRoute, getBackupsFilenameRouteHandler)
  .openapi(deleteBackupsFilenameRoute, deleteBackupsFilenameRouteHandler)
  .openapi(postBackupsUploadRoute, postBackupsUploadRouteHandler)
  .openapi(getBackupsSettingsRoute, getBackupsSettingsRouteHandler)
  .openapi(patchBackupsSettingsRoute, patchBackupsSettingsRouteHandler)
  .openapi(getAnnouncementsRoute, getAnnouncementsRouteHandler)
  .openapi(getAnnouncementsIdRoute, getAnnouncementsIdRouteHandler)

export default app
