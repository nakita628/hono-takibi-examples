import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeDBSubnetGroupsRoute,
  postActionDescribeDBSubnetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbSubnetGroupsHandler = app
  .openapi(getActionDescribeDBSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
