import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeConversionTasksRoute,
  postActionDescribeConversionTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeConversionTasksHandler = app
  .openapi(getActionDescribeConversionTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeConversionTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
