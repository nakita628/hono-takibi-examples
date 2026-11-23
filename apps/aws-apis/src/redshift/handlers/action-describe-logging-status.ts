import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLoggingStatusRoute,
  postActionDescribeLoggingStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLoggingStatusHandler = app
  .openapi(getActionDescribeLoggingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLoggingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
