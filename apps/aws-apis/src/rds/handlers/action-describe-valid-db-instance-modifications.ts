import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeValidDBInstanceModificationsRoute,
  postActionDescribeValidDBInstanceModificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeValidDbInstanceModificationsHandler = app
  .openapi(getActionDescribeValidDBInstanceModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeValidDBInstanceModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
