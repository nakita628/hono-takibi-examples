import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBackupManifestRoute,
  getBackupRoute,
  postBackupCreateRoute,
  postBackupRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(getBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
