import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasPostgresNameRoute,
  deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
  deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute,
  deleteDbaasPostgresServiceNameUserUsernameRoute,
  getDbaasPostgresNameRoute,
  getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute,
  postDbaasPostgresNameMigrationStopRoute,
  postDbaasPostgresNameRoute,
  postDbaasPostgresServiceNameConnectionPoolRoute,
  postDbaasPostgresServiceNameDatabaseRoute,
  postDbaasPostgresServiceNameUserRoute,
  postDbaasPostgresServiceUpgradeCheckRoute,
  putDbaasPostgresNameMaintenanceStartRoute,
  putDbaasPostgresNameRoute,
  putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute,
  putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute,
  putDbaasPostgresServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasPostgresHandler = app
  .openapi(postDbaasPostgresServiceUpgradeCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameConnectionPoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameDatabaseDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresServiceNameDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameUserUsernameAllowReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresServiceNameConnectionPoolConnectionPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasPostgresServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasPostgresNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasPostgresServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
