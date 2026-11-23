import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTrafficSourcesRoute,
  postActionDescribeTrafficSourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTrafficSourcesHandler = app
  .openapi(getActionDescribeTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTrafficSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
