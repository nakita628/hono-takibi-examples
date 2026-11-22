import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReplicationGroupsRoute,
  postActionDescribeReplicationGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeReplicationGroupsHandler = app
  .openapi(getActionDescribeReplicationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReplicationGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
