import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeVpcEndpointServicesRoute,
  postActionDescribeVpcEndpointServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeVpcEndpointServicesHandler = app
  .openapi(getActionDescribeVpcEndpointServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeVpcEndpointServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
