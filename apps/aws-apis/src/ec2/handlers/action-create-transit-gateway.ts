import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateTransitGatewayRoute, postActionCreateTransitGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateTransitGatewayHandler = app
  .openapi(getActionCreateTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTransitGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
