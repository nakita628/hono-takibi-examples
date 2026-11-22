import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4AdminMigrationsPendingRoute,
  postApiV4AdminMigrationsTimestampMarkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationsHandler = app
  .openapi(getApiV4AdminMigrationsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminMigrationsTimestampMarkRoute, (c) => {
    throw new Error('Not implemented')
  })
