import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getV1ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getV1ProjectsProjectInstancesInstanceBackupRunsRoute,
  postV1ProjectsProjectInstancesInstanceBackupRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupRunsHandler = app
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
