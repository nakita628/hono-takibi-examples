import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTransitGatewayRouteTableAnnouncementsRoute,
  postActionDescribeTransitGatewayRouteTableAnnouncementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeTransitGatewayRouteTableAnnouncementsHandler = app
  .openapi(getActionDescribeTransitGatewayRouteTableAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTransitGatewayRouteTableAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
