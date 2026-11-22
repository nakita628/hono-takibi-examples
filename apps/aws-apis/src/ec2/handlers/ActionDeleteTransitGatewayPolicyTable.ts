import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayPolicyTableRoute,
  postActionDeleteTransitGatewayPolicyTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTransitGatewayPolicyTableHandler = app
  .openapi(getActionDeleteTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
