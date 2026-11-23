import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackResourceRoute,
  postActionDescribeStackResourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackResourceHandler = app
  .openapi(getActionDescribeStackResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
