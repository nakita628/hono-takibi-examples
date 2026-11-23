import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGatewayRequestLogsGatewayRequestLogLogIdRoute,
  getGatewayRequestLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewayRequestLogsHandler = app
  .openapi(getGatewayRequestLogsGatewayRequestLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGatewayRequestLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
