import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGatewayWebhookLogsGatewayWebhookLogWebhookIdRoute,
  getGatewayWebhookLogsRoute,
} from '../routes'

export const getGatewayWebhookLogsGatewayWebhookLogWebhookIdRouteHandler: RouteHandler<
  typeof getGatewayWebhookLogsGatewayWebhookLogWebhookIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGatewayWebhookLogsRouteHandler: RouteHandler<
  typeof getGatewayWebhookLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
