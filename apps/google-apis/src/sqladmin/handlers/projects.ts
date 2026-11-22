import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute,
  getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeRoute,
  postV1ProjectsProjectInstancesInstancePerformDiskShrinkRoute,
  postV1ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute,
  postV1ProjectsProjectInstancesInstanceResetReplicaSizeRoute,
  postV1ProjectsProjectInstancesInstanceStartExternalSyncRoute,
  postV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getV1ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectInstancesInstanceGetLatestRecoveryTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstancePerformDiskShrinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceResetReplicaSizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceStartExternalSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
