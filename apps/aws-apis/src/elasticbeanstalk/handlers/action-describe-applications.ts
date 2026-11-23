import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeApplicationsRoute, postActionDescribeApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeApplicationsHandler = app
  .openapi(getActionDescribeApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
