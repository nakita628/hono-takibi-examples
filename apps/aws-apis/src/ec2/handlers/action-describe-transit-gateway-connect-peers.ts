import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayConnectPeersRoute,
  postActionDescribeTransitGatewayConnectPeersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayConnectPeersHandler = app
  .openapi(getActionDescribeTransitGatewayConnectPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayConnectPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
