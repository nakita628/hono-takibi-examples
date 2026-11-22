import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeExportImageTasksRoute,
  postActionDescribeExportImageTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeExportImageTasksHandler = app
  .openapi(getActionDescribeExportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeExportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
