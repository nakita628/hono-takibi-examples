import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsBackupIdRoute,
  deleteCollectionsCollectionNameRoute,
  deleteIndexesIndexNameRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  getCollectionsCollectionNameRoute,
  getCollectionsRoute,
  getIndexesIndexNameBackupsRoute,
  getIndexesIndexNameRoute,
  getIndexesRoute,
  getRestoreJobsJobIdRoute,
  getRestoreJobsRoute,
  patchIndexesIndexNameRoute,
  postBackupsBackupIdCreateIndexRoute,
  postCollectionsRoute,
  postIndexesCreateForModelRoute,
  postIndexesIndexNameBackupsRoute,
  postIndexesRoute,
} from './routes'
import {
  deleteBackupsBackupIdRouteHandler,
  deleteCollectionsCollectionNameRouteHandler,
  deleteIndexesIndexNameRouteHandler,
  getBackupsBackupIdRouteHandler,
  getBackupsRouteHandler,
  getCollectionsCollectionNameRouteHandler,
  getCollectionsRouteHandler,
  getIndexesIndexNameBackupsRouteHandler,
  getIndexesIndexNameRouteHandler,
  getIndexesRouteHandler,
  getRestoreJobsJobIdRouteHandler,
  getRestoreJobsRouteHandler,
  patchIndexesIndexNameRouteHandler,
  postBackupsBackupIdCreateIndexRouteHandler,
  postCollectionsRouteHandler,
  postIndexesCreateForModelRouteHandler,
  postIndexesIndexNameBackupsRouteHandler,
  postIndexesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getIndexesRoute, getIndexesRouteHandler)
  .openapi(postIndexesRoute, postIndexesRouteHandler)
  .openapi(getIndexesIndexNameRoute, getIndexesIndexNameRouteHandler)
  .openapi(deleteIndexesIndexNameRoute, deleteIndexesIndexNameRouteHandler)
  .openapi(patchIndexesIndexNameRoute, patchIndexesIndexNameRouteHandler)
  .openapi(getIndexesIndexNameBackupsRoute, getIndexesIndexNameBackupsRouteHandler)
  .openapi(postIndexesIndexNameBackupsRoute, postIndexesIndexNameBackupsRouteHandler)
  .openapi(getCollectionsRoute, getCollectionsRouteHandler)
  .openapi(postCollectionsRoute, postCollectionsRouteHandler)
  .openapi(postIndexesCreateForModelRoute, postIndexesCreateForModelRouteHandler)
  .openapi(getBackupsRoute, getBackupsRouteHandler)
  .openapi(getBackupsBackupIdRoute, getBackupsBackupIdRouteHandler)
  .openapi(deleteBackupsBackupIdRoute, deleteBackupsBackupIdRouteHandler)
  .openapi(postBackupsBackupIdCreateIndexRoute, postBackupsBackupIdCreateIndexRouteHandler)
  .openapi(getRestoreJobsRoute, getRestoreJobsRouteHandler)
  .openapi(getRestoreJobsJobIdRoute, getRestoreJobsJobIdRouteHandler)
  .openapi(getCollectionsCollectionNameRoute, getCollectionsCollectionNameRouteHandler)
  .openapi(deleteCollectionsCollectionNameRoute, deleteCollectionsCollectionNameRouteHandler)

export default app
