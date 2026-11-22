import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute,
  patchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  postSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute,
  putSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
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
