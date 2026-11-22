import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceTypeOfferingsRoute,
  postActionDescribeInstanceTypeOfferingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeInstanceTypeOfferingsHandler = app
  .openapi(getActionDescribeInstanceTypeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceTypeOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
