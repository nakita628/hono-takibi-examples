import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedDBInstancesRoute,
  postActionDescribeReservedDBInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedDbInstancesHandler = app
  .openapi(getActionDescribeReservedDBInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedDBInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
