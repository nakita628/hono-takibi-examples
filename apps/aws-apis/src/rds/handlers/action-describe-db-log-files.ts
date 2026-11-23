import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBLogFilesRoute, postActionDescribeDBLogFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbLogFilesHandler = app
  .openapi(getActionDescribeDBLogFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBLogFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
