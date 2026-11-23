import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteDBInstanceAutomatedBackupRoute,
  postActionDeleteDBInstanceAutomatedBackupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbInstanceAutomatedBackupHandler = app
  .openapi(getActionDeleteDBInstanceAutomatedBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBInstanceAutomatedBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
