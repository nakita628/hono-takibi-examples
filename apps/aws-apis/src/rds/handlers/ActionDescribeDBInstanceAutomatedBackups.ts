import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBInstanceAutomatedBackupsRoute,
  postActionDescribeDBInstanceAutomatedBackupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBInstanceAutomatedBackupsHandler = app
  .openapi(getActionDescribeDBInstanceAutomatedBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBInstanceAutomatedBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
