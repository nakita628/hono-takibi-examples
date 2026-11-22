import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceEventWindowsRoute,
  postActionDescribeInstanceEventWindowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeInstanceEventWindowsHandler = app
  .openapi(getActionDescribeInstanceEventWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceEventWindowsRoute, (c) => {
    throw new Error('Not implemented')
  })
