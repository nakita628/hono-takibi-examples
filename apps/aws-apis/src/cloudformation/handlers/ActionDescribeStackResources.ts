import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeStackResourcesRoute,
  postActionDescribeStackResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeStackResourcesHandler = app
  .openapi(getActionDescribeStackResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeStackResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
