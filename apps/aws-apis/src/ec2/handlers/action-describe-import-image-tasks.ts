import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeImportImageTasksRoute,
  postActionDescribeImportImageTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeImportImageTasksHandler = app
  .openapi(getActionDescribeImportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeImportImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
