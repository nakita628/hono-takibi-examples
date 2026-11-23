import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTypeRegistrationRoute,
  postActionDescribeTypeRegistrationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTypeRegistrationHandler = app
  .openapi(getActionDescribeTypeRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTypeRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
