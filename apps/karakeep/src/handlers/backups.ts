import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBackupsBackupIdRoute,
  getBackupsBackupIdDownloadRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  postBackupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupsHandler = app
  .openapi(getBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupsBackupIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
