import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SystemBackupIdRoute,
  getApiV1SystemBackupRoute,
  postApiV1SystemBackupRestoreIdRoute,
  postApiV1SystemBackupRestoreUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupHandler = app
  .openapi(getApiV1SystemBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SystemBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SystemBackupRestoreUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
