import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterParametersRoute,
  postActionDescribeDBClusterParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbClusterParametersHandler = app
  .openapi(getActionDescribeDBClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
