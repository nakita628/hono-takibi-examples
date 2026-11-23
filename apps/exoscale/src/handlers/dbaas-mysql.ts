import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasMysqlNameRoute,
  deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute,
  deleteDbaasMysqlServiceNameUserUsernameRoute,
  getDbaasMysqlNameRoute,
  getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute,
  postDbaasMysqlNameMigrationStopRoute,
  postDbaasMysqlNameRoute,
  postDbaasMysqlServiceNameDatabaseRoute,
  postDbaasMysqlServiceNameUserRoute,
  putDbaasMysqlNameEnableWritesRoute,
  putDbaasMysqlNameMaintenanceStartRoute,
  putDbaasMysqlNameRoute,
  putDbaasMysqlServiceNameUserUsernamePasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasMysqlHandler = app
  .openapi(putDbaasMysqlServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlServiceNameDatabaseDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasMysqlServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasMysqlNameEnableWritesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasMysqlServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasMysqlServiceNameDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
