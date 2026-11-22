import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
  getApiVersionDatabasesInstancesRoute,
  getApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  getApiVersionDatabasesMysqlInstancesRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
  getApiVersionDatabasesPostgresqlInstancesRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdPatchRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdResumeRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRoute,
  postApiVersionDatabasesMysqlInstancesRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRoute,
  postApiVersionDatabasesPostgresqlInstancesRoute,
  putApiVersionDatabasesMysqlInstancesInstanceIdRoute,
  putApiVersionDatabasesPostgresqlInstancesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
  .openapi(getApiVersionDatabasesInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
