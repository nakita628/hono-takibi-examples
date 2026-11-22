import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVerifiedAccessInstancesRoute,
  postActionDescribeVerifiedAccessInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVerifiedAccessInstancesHandler = app
  .openapi(getActionDescribeVerifiedAccessInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVerifiedAccessInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
