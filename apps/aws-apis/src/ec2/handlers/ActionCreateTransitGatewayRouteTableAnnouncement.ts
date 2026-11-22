import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayRouteTableAnnouncementRoute,
  postActionCreateTransitGatewayRouteTableAnnouncementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTransitGatewayRouteTableAnnouncementHandler = app
  .openapi(getActionCreateTransitGatewayRouteTableAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayRouteTableAnnouncementRoute, (c) => {
    throw new Error('Not implemented')
  })
