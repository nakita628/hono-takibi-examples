import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyTransitGatewayRoute, postActionModifyTransitGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyTransitGatewayHandler = app
  .openapi(getActionModifyTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
