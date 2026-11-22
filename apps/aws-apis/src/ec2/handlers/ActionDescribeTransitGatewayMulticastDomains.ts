import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayMulticastDomainsRoute,
  postActionDescribeTransitGatewayMulticastDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeTransitGatewayMulticastDomainsHandler = app
  .openapi(getActionDescribeTransitGatewayMulticastDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayMulticastDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
