import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteNatGatewayRoute, postActionDeleteNatGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteNatGatewayHandler = app
  .openapi(getActionDeleteNatGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteNatGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
