import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEnvironmentHealthRoute,
  postActionDescribeEnvironmentHealthRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEnvironmentHealthHandler = app
  .openapi(getActionDescribeEnvironmentHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEnvironmentHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
