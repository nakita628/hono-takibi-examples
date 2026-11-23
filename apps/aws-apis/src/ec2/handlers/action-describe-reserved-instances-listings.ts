import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedInstancesListingsRoute,
  postActionDescribeReservedInstancesListingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedInstancesListingsHandler = app
  .openapi(getActionDescribeReservedInstancesListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedInstancesListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
