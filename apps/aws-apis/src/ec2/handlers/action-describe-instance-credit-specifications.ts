import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceCreditSpecificationsRoute,
  postActionDescribeInstanceCreditSpecificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceCreditSpecificationsHandler = app
  .openapi(getActionDescribeInstanceCreditSpecificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceCreditSpecificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
