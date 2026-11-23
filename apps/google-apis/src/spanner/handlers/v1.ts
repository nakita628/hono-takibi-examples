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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1DatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatabaseDdlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1DatabaseDdlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DatabaseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatabaseSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DatabaseSessionsBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameScansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBackupOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentBackupsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDatabaseOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDatabaseRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDatabasesRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstanceConfigOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstanceConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionBeginTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionExecuteBatchDmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionExecuteSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionExecuteStreamingSqlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionPartitionQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionPartitionReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionRollbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SessionStreamingReadRoute, (c) => {
    throw new Error('Not implemented')
  })
