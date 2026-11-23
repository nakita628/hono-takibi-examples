import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisassociateTransitGatewayPolicyTableRoute,
  postActionDisassociateTransitGatewayPolicyTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisassociateTransitGatewayPolicyTableHandler = app
  .openapi(getActionDisassociateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisassociateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
