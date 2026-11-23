import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhookDeliveriesIdRoute, getWebhookDeliveriesRoute } from '../routes'

export const getWebhookDeliveriesRouteHandler: RouteHandler<
  typeof getWebhookDeliveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhookDeliveriesIdRouteHandler: RouteHandler<
  typeof getWebhookDeliveriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
