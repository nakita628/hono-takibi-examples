import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeEnvironmentResourcesRoute,
  postActionDescribeEnvironmentResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeEnvironmentResourcesHandler = app
  .openapi(getActionDescribeEnvironmentResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeEnvironmentResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
