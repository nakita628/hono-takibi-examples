import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEnvironmentManagedActionsRoute,
  postActionDescribeEnvironmentManagedActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEnvironmentManagedActionsHandler = app
  .openapi(getActionDescribeEnvironmentManagedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEnvironmentManagedActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
