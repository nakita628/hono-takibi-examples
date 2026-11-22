import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3SystemBackupIdRoute,
  getApiV3SystemBackupRoute,
  postApiV3SystemBackupRestoreIdRoute,
  postApiV3SystemBackupRestoreUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(getApiV3SystemBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3SystemBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemBackupRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3SystemBackupRestoreUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
