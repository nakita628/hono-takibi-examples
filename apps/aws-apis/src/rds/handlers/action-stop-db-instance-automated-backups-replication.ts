import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStopDBInstanceAutomatedBackupsReplicationRoute,
  postActionStopDBInstanceAutomatedBackupsReplicationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStopDbInstanceAutomatedBackupsReplicationHandler = app
  .openapi(getActionStopDBInstanceAutomatedBackupsReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopDBInstanceAutomatedBackupsReplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
