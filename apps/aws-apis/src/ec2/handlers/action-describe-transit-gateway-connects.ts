import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayConnectsRoute,
  postActionDescribeTransitGatewayConnectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTransitGatewayConnectsHandler = app
  .openapi(getActionDescribeTransitGatewayConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
