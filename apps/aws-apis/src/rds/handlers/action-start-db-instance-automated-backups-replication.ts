import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStartDBInstanceAutomatedBackupsReplicationRoute,
  postActionStartDBInstanceAutomatedBackupsReplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStartDbInstanceAutomatedBackupsReplicationHandler = app
  .openapi(getActionStartDBInstanceAutomatedBackupsReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartDBInstanceAutomatedBackupsReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
