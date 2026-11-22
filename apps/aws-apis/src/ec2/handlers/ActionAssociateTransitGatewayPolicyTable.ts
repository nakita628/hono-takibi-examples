import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAssociateTransitGatewayPolicyTableRoute,
  postActionAssociateTransitGatewayPolicyTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAssociateTransitGatewayPolicyTableHandler = app
  .openapi(getActionAssociateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
