import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeClusterSubnetGroupsRoute,
  postActionDescribeClusterSubnetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeClusterSubnetGroupsHandler = app
  .openapi(getActionDescribeClusterSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClusterSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
