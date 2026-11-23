import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedInstancesRoute,
  postActionDescribeReservedInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedInstancesHandler = app
  .openapi(getActionDescribeReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
