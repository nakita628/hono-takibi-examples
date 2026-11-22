import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVerifiedAccessGroupsRoute,
  postActionDescribeVerifiedAccessGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVerifiedAccessGroupsHandler = app
  .openapi(getActionDescribeVerifiedAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVerifiedAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
