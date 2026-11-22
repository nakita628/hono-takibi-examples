import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1MigrationPurgeCompanyRoute,
  postApiV1MigrationPurgeSaveSettingsCompanyRoute,
  postApiV1MigrationStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationHandler = app
  .openapi(postApiV1MigrationPurgeCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MigrationPurgeSaveSettingsCompanyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MigrationStartRoute, (c) => {
    throw new Error('Not implemented')
  })
