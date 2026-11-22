import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBackupJobsBackupJobIdRoute,
  getBackupJobsIndexRoute,
  postBackupJobsBackupJobIdRoute,
  putBackupJobsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupJobsHandler = app
  .openapi(getBackupJobsBackupJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBackupJobsBackupJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBackupJobsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBackupJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
