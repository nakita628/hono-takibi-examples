import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStoreImageTasksRoute,
  postActionDescribeStoreImageTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStoreImageTasksHandler = app
  .openapi(getActionDescribeStoreImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStoreImageTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
