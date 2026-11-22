import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeUserGroupsRoute, postActionDescribeUserGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeUserGroupsHandler = app
  .openapi(getActionDescribeUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
