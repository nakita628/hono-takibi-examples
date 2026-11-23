import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReservedNodeOfferingsRoute,
  postActionDescribeReservedNodeOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReservedNodeOfferingsHandler = app
  .openapi(getActionDescribeReservedNodeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReservedNodeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
