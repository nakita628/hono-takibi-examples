import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionDatabasesMysqlInstancesInstanceIdSslRoute,
  getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslCertificatesHandler = app
  .openapi(getApiVersionDatabasesMysqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDatabasesPostgresqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
