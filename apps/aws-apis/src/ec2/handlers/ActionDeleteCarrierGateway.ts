import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteCarrierGatewayRoute, postActionDeleteCarrierGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCarrierGatewayHandler = app
  .openapi(getActionDeleteCarrierGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCarrierGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
