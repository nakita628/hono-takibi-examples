import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBInstanceFromDBSnapshotRoute,
  postActionRestoreDBInstanceFromDBSnapshotRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRestoreDBInstanceFromDBSnapshotHandler = app
  .openapi(getActionRestoreDBInstanceFromDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBInstanceFromDBSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
