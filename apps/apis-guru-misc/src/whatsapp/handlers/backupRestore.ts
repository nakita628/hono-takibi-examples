import { OpenAPIHono } from '@hono/zod-openapi'
import { postSettingsBackupRoute, postSettingsRestoreRoute } from '../routes'

const app = new OpenAPIHono()

export const backupRestoreHandler = app
  .openapi(postSettingsBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
