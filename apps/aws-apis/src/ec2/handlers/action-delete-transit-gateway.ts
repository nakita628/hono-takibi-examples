import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteTransitGatewayRoute, postActionDeleteTransitGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteTransitGatewayHandler = app
  .openapi(getActionDeleteTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
