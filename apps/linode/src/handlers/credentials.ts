import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRoute,
  postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRoute,
  postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesMysqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
