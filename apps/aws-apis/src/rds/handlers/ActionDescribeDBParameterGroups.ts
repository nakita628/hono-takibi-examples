import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBParameterGroupsRoute,
  postActionDescribeDBParameterGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDBParameterGroupsHandler = app
  .openapi(getActionDescribeDBParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
