import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  deleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  deleteSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  deleteSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  getSqlV1beta4FlagsRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  getSqlV1beta4ProjectsProjectInstancesRoute,
  getSqlV1beta4ProjectsProjectOperationsOperationRoute,
  getSqlV1beta4ProjectsProjectOperationsRoute,
  getSqlV1beta4ProjectsProjectTiersRoute,
  patchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  patchSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceCloneRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceExportRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceFailoverRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceImportRoute,
  postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkRoute,
  postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRestartRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute,
  postSqlV1beta4ProjectsProjectInstancesRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sqlHandler = app
  .openapi(getSqlV1beta4FlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSqlV1beta4ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSqlV1beta4ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
