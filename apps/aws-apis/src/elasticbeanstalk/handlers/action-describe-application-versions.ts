import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeApplicationVersionsRoute,
  postActionDescribeApplicationVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeApplicationVersionsHandler = app
  .openapi(getActionDescribeApplicationVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeApplicationVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
