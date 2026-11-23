import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedInstancesOfferingsRoute,
  postActionDescribeReservedInstancesOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedInstancesOfferingsHandler = app
  .openapi(getActionDescribeReservedInstancesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedInstancesOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
