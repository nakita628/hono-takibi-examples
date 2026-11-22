import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRoute,
  getApiVersionLinodeInstancesLinodeIdBackupsRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsCancelRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsEnableRoute,
  postApiVersionLinodeInstancesLinodeIdBackupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const backupsHandler = app
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLinodeInstancesLinodeIdBackupsBackupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionLinodeInstancesLinodeIdBackupsBackupIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
