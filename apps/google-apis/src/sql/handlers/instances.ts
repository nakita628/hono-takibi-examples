import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  getSqlV1beta4ProjectsProjectInstancesRoute,
  patchSqlV1beta4ProjectsProjectInstancesInstanceRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceCloneRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceExportRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceFailoverRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceImportRoute,
  postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRestartRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogRoute,
  postSqlV1beta4ProjectsProjectInstancesRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app
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
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceCloneRoute, (c) => {
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
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaRoute, (c) => {
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
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogRoute, (c) => {
    throw new Error('Not implemented')
  })
