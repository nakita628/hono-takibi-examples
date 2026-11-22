import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackInstanceRoute,
  postActionDescribeStackInstanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStackInstanceHandler = app
  .openapi(getActionDescribeStackInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
