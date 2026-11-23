import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeInstancesHealthRoute,
  postActionDescribeInstancesHealthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeInstancesHealthHandler = app
  .openapi(getActionDescribeInstancesHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeInstancesHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
