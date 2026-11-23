import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesMongodbInstancesInstanceIdRoute,
  deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesMysqlInstancesInstanceIdRoute,
  deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
  deleteDatabasesPostgresqlInstancesInstanceIdRoute,
  getDatabasesEnginesEngineIdRoute,
  getDatabasesEnginesRoute,
  getDatabasesInstancesRoute,
  getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesMongodbInstancesInstanceIdBackupsRoute,
  getDatabasesMongodbInstancesInstanceIdCredentialsRoute,
  getDatabasesMongodbInstancesInstanceIdRoute,
  getDatabasesMongodbInstancesInstanceIdSslRoute,
  getDatabasesMongodbInstancesRoute,
  getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesMysqlInstancesInstanceIdBackupsRoute,
  getDatabasesMysqlInstancesInstanceIdCredentialsRoute,
  getDatabasesMysqlInstancesInstanceIdRoute,
  getDatabasesMysqlInstancesInstanceIdSslRoute,
  getDatabasesMysqlInstancesRoute,
  getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute,
  getDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
  getDatabasesPostgresqlInstancesInstanceIdCredentialsRoute,
  getDatabasesPostgresqlInstancesInstanceIdRoute,
  getDatabasesPostgresqlInstancesInstanceIdSslRoute,
  getDatabasesPostgresqlInstancesRoute,
  getDatabasesTypesRoute,
  getDatabasesTypesTypeIdRoute,
  postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesMongodbInstancesInstanceIdBackupsRoute,
  postDatabasesMongodbInstancesInstanceIdCredentialsResetRoute,
  postDatabasesMongodbInstancesInstanceIdPatchRoute,
  postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesMysqlInstancesInstanceIdBackupsRoute,
  postDatabasesMysqlInstancesInstanceIdCredentialsResetRoute,
  postDatabasesMysqlInstancesInstanceIdPatchRoute,
  postDatabasesMysqlInstancesRoute,
  postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRoute,
  postDatabasesPostgresqlInstancesInstanceIdBackupsRoute,
  postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute,
  postDatabasesPostgresqlInstancesInstanceIdPatchRoute,
  postDatabasesPostgresqlInstancesRoute,
  putDatabasesMongodbInstancesInstanceIdRoute,
  putDatabasesMysqlInstancesInstanceIdRoute,
  putDatabasesPostgresqlInstancesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databasesHandler = app
  .openapi(getDatabasesEnginesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesEnginesEngineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesMongodbInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesMongodbInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMongodbInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMongodbInstancesInstanceIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMongodbInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMongodbInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMongodbInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMysqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesMysqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMysqlInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMysqlInstancesInstanceIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMysqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesMysqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesMysqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesPostgresqlInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatabasesPostgresqlInstancesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesPostgresqlInstancesInstanceIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesPostgresqlInstancesInstanceIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesInstanceIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesPostgresqlInstancesInstanceIdCredentialsResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatabasesPostgresqlInstancesInstanceIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesPostgresqlInstancesInstanceIdSslRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatabasesTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
