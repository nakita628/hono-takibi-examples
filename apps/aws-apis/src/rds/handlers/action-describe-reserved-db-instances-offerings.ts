import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedDBInstancesOfferingsRoute,
  postActionDescribeReservedDBInstancesOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedDbInstancesOfferingsHandler = app
  .openapi(getActionDescribeReservedDBInstancesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedDBInstancesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
