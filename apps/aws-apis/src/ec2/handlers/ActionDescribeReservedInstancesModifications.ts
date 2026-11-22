import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedInstancesModificationsRoute,
  postActionDescribeReservedInstancesModificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReservedInstancesModificationsHandler = app
  .openapi(getActionDescribeReservedInstancesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedInstancesModificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
