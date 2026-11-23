import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeAccountLimitsRoute,
  postActionDescribeAccountLimitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeAccountLimitsHandler = app
  .openapi(getActionDescribeAccountLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeAccountLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
