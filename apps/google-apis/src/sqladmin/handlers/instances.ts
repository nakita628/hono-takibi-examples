import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceRoute,
  getV1ProjectsProjectInstancesInstanceListServerCasRoute,
  getV1ProjectsProjectInstancesInstanceRoute,
  getV1ProjectsProjectInstancesRoute,
  patchV1ProjectsProjectInstancesInstanceRoute,
  postV1ProjectsProjectInstancesInstanceAddServerCaRoute,
  postV1ProjectsProjectInstancesInstanceCloneRoute,
  postV1ProjectsProjectInstancesInstanceDemoteMasterRoute,
  postV1ProjectsProjectInstancesInstanceDemoteRoute,
  postV1ProjectsProjectInstancesInstanceExportRoute,
  postV1ProjectsProjectInstancesInstanceFailoverRoute,
  postV1ProjectsProjectInstancesInstanceImportRoute,
  postV1ProjectsProjectInstancesInstancePromoteReplicaRoute,
  postV1ProjectsProjectInstancesInstanceReencryptRoute,
  postV1ProjectsProjectInstancesInstanceResetSslConfigRoute,
  postV1ProjectsProjectInstancesInstanceRestartRoute,
  postV1ProjectsProjectInstancesInstanceRestoreBackupRoute,
  postV1ProjectsProjectInstancesInstanceRotateServerCaRoute,
  postV1ProjectsProjectInstancesInstanceStartReplicaRoute,
  postV1ProjectsProjectInstancesInstanceStopReplicaRoute,
  postV1ProjectsProjectInstancesInstanceSwitchoverRoute,
  postV1ProjectsProjectInstancesInstanceTruncateLogRoute,
  postV1ProjectsProjectInstancesRoute,
  putV1ProjectsProjectInstancesInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancesHandler = app
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
  .openapi(postV1ProjectsProjectInstancesInstanceCloneRoute, (c) => {
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
  .openapi(postV1ProjectsProjectInstancesInstanceImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceListServerCasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstancePromoteReplicaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceReencryptRoute, (c) => {
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
