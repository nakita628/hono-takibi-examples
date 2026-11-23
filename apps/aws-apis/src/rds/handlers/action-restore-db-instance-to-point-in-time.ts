import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRestoreDBInstanceToPointInTimeRoute,
  postActionRestoreDBInstanceToPointInTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRestoreDbInstanceToPointInTimeHandler = app
  .openapi(getActionRestoreDBInstanceToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRestoreDBInstanceToPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
