import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeGlobalReplicationGroupsRoute,
  postActionDescribeGlobalReplicationGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeGlobalReplicationGroupsHandler = app
  .openapi(getActionDescribeGlobalReplicationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeGlobalReplicationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
