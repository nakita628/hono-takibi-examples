import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackResourceDriftsRoute,
  postActionDescribeStackResourceDriftsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeStackResourceDriftsHandler = app
  .openapi(getActionDescribeStackResourceDriftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackResourceDriftsRoute, (c) => {
    throw new Error('Not implemented')
  })
