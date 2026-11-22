import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeExportTasksRoute, postActionDescribeExportTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeExportTasksHandler = app
  .openapi(getActionDescribeExportTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeExportTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
