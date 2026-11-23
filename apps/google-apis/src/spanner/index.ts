import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DatabaseRoute,
  deleteV1NameRoute,
  getV1DatabaseDdlRoute,
  getV1DatabaseSessionsRoute,
  getV1NameRoute,
  getV1NameScansRoute,
  getV1ParentBackupOperationsRoute,
  getV1ParentBackupsRoute,
  getV1ParentDatabaseOperationsRoute,
  getV1ParentDatabaseRolesRoute,
  getV1ParentDatabasesRoute,
  getV1ParentInstanceConfigOperationsRoute,
  getV1ParentInstanceConfigsRoute,
  getV1ParentInstancesRoute,
  getV1ParentRoute,
  patchV1DatabaseDdlRoute,
  patchV1NameRoute,
  postV1DatabaseSessionsBatchCreateRoute,
  postV1DatabaseSessionsRoute,
  postV1NameCancelRoute,
  postV1ParentBackupsCopyRoute,
  postV1ParentBackupsRoute,
  postV1ParentDatabasesRestoreRoute,
  postV1ParentDatabasesRoute,
  postV1ParentInstanceConfigsRoute,
  postV1ParentInstancesRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
  postV1SessionBeginTransactionRoute,
  postV1SessionCommitRoute,
  postV1SessionExecuteBatchDmlRoute,
  postV1SessionExecuteSqlRoute,
  postV1SessionExecuteStreamingSqlRoute,
  postV1SessionPartitionQueryRoute,
  postV1SessionPartitionReadRoute,
  postV1SessionReadRoute,
  postV1SessionRollbackRoute,
  postV1SessionStreamingReadRoute,
} from './routes'
import {
  deleteV1DatabaseRouteHandler,
  deleteV1NameRouteHandler,
  getV1DatabaseDdlRouteHandler,
  getV1DatabaseSessionsRouteHandler,
  getV1NameRouteHandler,
  getV1NameScansRouteHandler,
  getV1ParentBackupOperationsRouteHandler,
  getV1ParentBackupsRouteHandler,
  getV1ParentDatabaseOperationsRouteHandler,
  getV1ParentDatabaseRolesRouteHandler,
  getV1ParentDatabasesRouteHandler,
  getV1ParentInstanceConfigOperationsRouteHandler,
  getV1ParentInstanceConfigsRouteHandler,
  getV1ParentInstancesRouteHandler,
  getV1ParentRouteHandler,
  patchV1DatabaseDdlRouteHandler,
  patchV1NameRouteHandler,
  postV1DatabaseSessionsBatchCreateRouteHandler,
  postV1DatabaseSessionsRouteHandler,
  postV1NameCancelRouteHandler,
  postV1ParentBackupsCopyRouteHandler,
  postV1ParentBackupsRouteHandler,
  postV1ParentDatabasesRestoreRouteHandler,
  postV1ParentDatabasesRouteHandler,
  postV1ParentInstanceConfigsRouteHandler,
  postV1ParentInstancesRouteHandler,
  postV1ResourceGetIamPolicyRouteHandler,
  postV1ResourceSetIamPolicyRouteHandler,
  postV1ResourceTestIamPermissionsRouteHandler,
  postV1SessionBeginTransactionRouteHandler,
  postV1SessionCommitRouteHandler,
  postV1SessionExecuteBatchDmlRouteHandler,
  postV1SessionExecuteSqlRouteHandler,
  postV1SessionExecuteStreamingSqlRouteHandler,
  postV1SessionPartitionQueryRouteHandler,
  postV1SessionPartitionReadRouteHandler,
  postV1SessionReadRouteHandler,
  postV1SessionRollbackRouteHandler,
  postV1SessionStreamingReadRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1DatabaseRoute, deleteV1DatabaseRouteHandler)
  .openapi(getV1DatabaseDdlRoute, getV1DatabaseDdlRouteHandler)
  .openapi(patchV1DatabaseDdlRoute, patchV1DatabaseDdlRouteHandler)
  .openapi(getV1DatabaseSessionsRoute, getV1DatabaseSessionsRouteHandler)
  .openapi(postV1DatabaseSessionsRoute, postV1DatabaseSessionsRouteHandler)
  .openapi(postV1DatabaseSessionsBatchCreateRoute, postV1DatabaseSessionsBatchCreateRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1NameScansRoute, getV1NameScansRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(getV1ParentRoute, getV1ParentRouteHandler)
  .openapi(getV1ParentBackupOperationsRoute, getV1ParentBackupOperationsRouteHandler)
  .openapi(getV1ParentBackupsRoute, getV1ParentBackupsRouteHandler)
  .openapi(postV1ParentBackupsRoute, postV1ParentBackupsRouteHandler)
  .openapi(postV1ParentBackupsCopyRoute, postV1ParentBackupsCopyRouteHandler)
  .openapi(getV1ParentDatabaseOperationsRoute, getV1ParentDatabaseOperationsRouteHandler)
  .openapi(getV1ParentDatabaseRolesRoute, getV1ParentDatabaseRolesRouteHandler)
  .openapi(getV1ParentDatabasesRoute, getV1ParentDatabasesRouteHandler)
  .openapi(postV1ParentDatabasesRoute, postV1ParentDatabasesRouteHandler)
  .openapi(postV1ParentDatabasesRestoreRoute, postV1ParentDatabasesRestoreRouteHandler)
  .openapi(
    getV1ParentInstanceConfigOperationsRoute,
    getV1ParentInstanceConfigOperationsRouteHandler,
  )
  .openapi(getV1ParentInstanceConfigsRoute, getV1ParentInstanceConfigsRouteHandler)
  .openapi(postV1ParentInstanceConfigsRoute, postV1ParentInstanceConfigsRouteHandler)
  .openapi(getV1ParentInstancesRoute, getV1ParentInstancesRouteHandler)
  .openapi(postV1ParentInstancesRoute, postV1ParentInstancesRouteHandler)
  .openapi(postV1ResourceGetIamPolicyRoute, postV1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1ResourceSetIamPolicyRoute, postV1ResourceSetIamPolicyRouteHandler)
  .openapi(postV1ResourceTestIamPermissionsRoute, postV1ResourceTestIamPermissionsRouteHandler)
  .openapi(postV1SessionBeginTransactionRoute, postV1SessionBeginTransactionRouteHandler)
  .openapi(postV1SessionCommitRoute, postV1SessionCommitRouteHandler)
  .openapi(postV1SessionExecuteBatchDmlRoute, postV1SessionExecuteBatchDmlRouteHandler)
  .openapi(postV1SessionExecuteSqlRoute, postV1SessionExecuteSqlRouteHandler)
  .openapi(postV1SessionExecuteStreamingSqlRoute, postV1SessionExecuteStreamingSqlRouteHandler)
  .openapi(postV1SessionPartitionQueryRoute, postV1SessionPartitionQueryRouteHandler)
  .openapi(postV1SessionPartitionReadRoute, postV1SessionPartitionReadRouteHandler)
  .openapi(postV1SessionReadRoute, postV1SessionReadRouteHandler)
  .openapi(postV1SessionRollbackRoute, postV1SessionRollbackRouteHandler)
  .openapi(postV1SessionStreamingReadRoute, postV1SessionStreamingReadRouteHandler)

export default app
