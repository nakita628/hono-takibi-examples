import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBClusterParameterGroupsRoute,
  postActionDescribeDBClusterParameterGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbClusterParameterGroupsHandler = app
  .openapi(getActionDescribeDBClusterParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBClusterParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
