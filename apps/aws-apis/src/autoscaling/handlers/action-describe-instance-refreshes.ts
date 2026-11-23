import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceRefreshesRoute,
  postActionDescribeInstanceRefreshesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceRefreshesHandler = app
  .openapi(getActionDescribeInstanceRefreshesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceRefreshesRoute, (c) => {
    throw new Error('Not implemented')
  })
