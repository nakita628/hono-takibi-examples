import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayRouteTableAnnouncementRoute,
  postActionDeleteTransitGatewayRouteTableAnnouncementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayRouteTableAnnouncementHandler = app
  .openapi(getActionDeleteTransitGatewayRouteTableAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayRouteTableAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
