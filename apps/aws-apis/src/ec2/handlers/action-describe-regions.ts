import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeRegionsRoute, postActionDescribeRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeRegionsHandler = app
  .openapi(getActionDescribeRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
