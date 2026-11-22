import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGatewayWebhookLogsGatewayWebhookLogWebhookIdRoute,
  getGatewayWebhookLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewayWebhookLogsHandler = app
  .openapi(getGatewayWebhookLogsGatewayWebhookLogWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGatewayWebhookLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
