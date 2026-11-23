import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeSpotInstanceRequestsRoute,
  postActionDescribeSpotInstanceRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSpotInstanceRequestsHandler = app
  .openapi(getActionDescribeSpotInstanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSpotInstanceRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
