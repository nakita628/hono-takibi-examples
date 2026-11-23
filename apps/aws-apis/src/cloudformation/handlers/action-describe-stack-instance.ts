import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackInstanceRoute,
  postActionDescribeStackInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackInstanceHandler = app
  .openapi(getActionDescribeStackInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
