import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  getV1ProjectsProjectInstancesInstanceDatabasesRoute,
  patchV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
  postV1ProjectsProjectInstancesInstanceDatabasesRoute,
  putV1ProjectsProjectInstancesInstanceDatabasesDatabaseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
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
