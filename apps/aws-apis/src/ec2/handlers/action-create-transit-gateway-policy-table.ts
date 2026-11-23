import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayPolicyTableRoute,
  postActionCreateTransitGatewayPolicyTableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayPolicyTableHandler = app
  .openapi(getActionCreateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayPolicyTableRoute, (c) => {
    throw new Error('Not implemented')
  })
