import { OpenAPIHono } from '@hono/zod-openapi'
import { getGatewayBotRoute, getGatewayRoute } from '../routes'

const app = new OpenAPIHono()

export const gatewayHandler = app
  .openapi(getGatewayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGatewayBotRoute, (c) => {
    throw new Error('Not implemented')
  })
