import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEnvironmentManagedActionHistoryRoute,
  postActionDescribeEnvironmentManagedActionHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEnvironmentManagedActionHistoryHandler = app
  .openapi(getActionDescribeEnvironmentManagedActionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEnvironmentManagedActionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
