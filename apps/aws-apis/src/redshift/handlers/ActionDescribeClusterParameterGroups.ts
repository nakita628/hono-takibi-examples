import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterParameterGroupsRoute,
  postActionDescribeClusterParameterGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClusterParameterGroupsHandler = app
  .openapi(getActionDescribeClusterParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
