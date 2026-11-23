import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateCarrierGatewayRoute, postActionCreateCarrierGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateCarrierGatewayHandler = app
  .openapi(getActionCreateCarrierGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCarrierGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
