import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupRunsHandler = app
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
