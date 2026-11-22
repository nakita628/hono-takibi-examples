import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute,
  postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
