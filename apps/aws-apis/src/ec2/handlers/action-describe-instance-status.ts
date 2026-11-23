import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstanceStatusRoute,
  postActionDescribeInstanceStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstanceStatusHandler = app
  .openapi(getActionDescribeInstanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
