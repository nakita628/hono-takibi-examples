import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteTransitGatewayPolicyTableRoute,
  postActionDeleteTransitGatewayPolicyTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayPolicyTableHandler = app
  .openapi(getActionDeleteTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
