import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClassicLinkInstancesRoute,
  postActionDescribeClassicLinkInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClassicLinkInstancesHandler = app
  .openapi(getActionDescribeClassicLinkInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClassicLinkInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
