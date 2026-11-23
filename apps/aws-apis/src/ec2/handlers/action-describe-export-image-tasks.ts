import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeExportImageTasksRoute,
  postActionDescribeExportImageTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeExportImageTasksHandler = app
  .openapi(getActionDescribeExportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeExportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
