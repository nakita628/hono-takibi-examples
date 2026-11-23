import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsBackupIdRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  postBackupsBackupIdCreateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupsHandler = app
  .openapi(getBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupsBackupIdCreateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
