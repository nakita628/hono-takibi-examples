import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateTransitGatewayConnectRoute,
  postActionCreateTransitGatewayConnectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayConnectHandler = app
  .openapi(getActionCreateTransitGatewayConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
