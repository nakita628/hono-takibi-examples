import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  deleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  deleteV1ProjectsProjectInstancesInstanceRoute,
  deleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  deleteV1ProjectsProjectInstancesInstanceUsersRoute,
  getV1FlagsRoute,
  getV1ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getV1ProjectsProjectInstancesInstanceBackupRunsRoute,
  getV1ProjectsProjectInstancesInstanceConnectSettingsRoute,
  getV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getV1ProjectsProjectInstancesInstanceDatabasesRoute,
  getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute,
  getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeRoute,
  getV1ProjectsProjectInstancesInstanceListServerCasRoute,
  getV1ProjectsProjectInstancesInstanceRoute,
  getV1ProjectsProjectInstancesInstanceSslCertsRoute,
  getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute,
  getV1ProjectsProjectInstancesInstanceUsersNameRoute,
  getV1ProjectsProjectInstancesInstanceUsersRoute,
  getV1ProjectsProjectInstancesRoute,
  getV1ProjectsProjectOperationsOperationRoute,
  getV1ProjectsProjectOperationsRoute,
  getV1ProjectsProjectTiersRoute,
  patchV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  patchV1ProjectsProjectInstancesInstanceRoute,
  postV1ProjectsProjectInstancesInstanceAddServerCaRoute,
  postV1ProjectsProjectInstancesInstanceBackupRunsRoute,
  postV1ProjectsProjectInstancesInstanceCloneRoute,
  postV1ProjectsProjectInstancesInstanceCreateEphemeralRoute,
  postV1ProjectsProjectInstancesInstanceDatabasesRoute,
  postV1ProjectsProjectInstancesInstanceDemoteMasterRoute,
  postV1ProjectsProjectInstancesInstanceDemoteRoute,
  postV1ProjectsProjectInstancesInstanceExportRoute,
  postV1ProjectsProjectInstancesInstanceFailoverRoute,
  postV1ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute,
  postV1ProjectsProjectInstancesInstanceImportRoute,
  postV1ProjectsProjectInstancesInstancePerformDiskShrinkRoute,
  postV1ProjectsProjectInstancesInstancePromoteReplicaRoute,
  postV1ProjectsProjectInstancesInstanceReencryptRoute,
  postV1ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute,
  postV1ProjectsProjectInstancesInstanceResetReplicaSizeRoute,
  postV1ProjectsProjectInstancesInstanceResetSslConfigRoute,
  postV1ProjectsProjectInstancesInstanceRestartRoute,
  postV1ProjectsProjectInstancesInstanceRestoreBackupRoute,
  postV1ProjectsProjectInstancesInstanceRotateServerCaRoute,
  postV1ProjectsProjectInstancesInstanceSslCertsRoute,
  postV1ProjectsProjectInstancesInstanceStartExternalSyncRoute,
  postV1ProjectsProjectInstancesInstanceStartReplicaRoute,
  postV1ProjectsProjectInstancesInstanceStopReplicaRoute,
  postV1ProjectsProjectInstancesInstanceSwitchoverRoute,
  postV1ProjectsProjectInstancesInstanceTruncateLogRoute,
  postV1ProjectsProjectInstancesInstanceUsersRoute,
  postV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute,
  postV1ProjectsProjectInstancesRoute,
  postV1ProjectsProjectOperationsOperationCancelRoute,
  putV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  putV1ProjectsProjectInstancesInstanceRoute,
  putV1ProjectsProjectInstancesInstanceUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1FlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectInstancesInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceAddServerCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceBackupRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceBackupRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceBackupRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceBackupRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceCloneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceConnectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceCreateEphemeralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceDemoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceDemoteMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceListServerCasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstancePerformDiskShrinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstancePromoteReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceReencryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceResetReplicaSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceResetSslConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceRestoreBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceRotateServerCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceStartExternalSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceStartReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceStopReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceSwitchoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceTruncateLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsProjectInstancesInstanceUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceUsersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectOperationsOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectOperationsOperationCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
