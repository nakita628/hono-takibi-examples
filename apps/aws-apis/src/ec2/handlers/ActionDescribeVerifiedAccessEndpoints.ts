import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVerifiedAccessEndpointsRoute,
  postActionDescribeVerifiedAccessEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeVerifiedAccessEndpointsHandler = app
  .openapi(getActionDescribeVerifiedAccessEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVerifiedAccessEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
