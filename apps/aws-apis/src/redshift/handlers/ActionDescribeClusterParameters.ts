import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterParametersRoute,
  postActionDescribeClusterParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClusterParametersHandler = app
  .openapi(getActionDescribeClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
