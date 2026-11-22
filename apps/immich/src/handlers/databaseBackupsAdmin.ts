import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDatabaseBackupsRoute,
  getAdminDatabaseBackupsFilenameRoute,
  getAdminDatabaseBackupsRoute,
  postAdminDatabaseBackupsStartRestoreRoute,
  postAdminDatabaseBackupsUploadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseBackupsAdminHandler = app
  .openapi(deleteAdminDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDatabaseBackupsStartRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDatabaseBackupsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDatabaseBackupsFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
