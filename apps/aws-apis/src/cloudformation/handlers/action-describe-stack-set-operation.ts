import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackSetOperationRoute,
  postActionDescribeStackSetOperationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackSetOperationHandler = app
  .openapi(getActionDescribeStackSetOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackSetOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
