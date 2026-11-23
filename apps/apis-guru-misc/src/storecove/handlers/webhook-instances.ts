import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWebhookInstancesGuidRoute, getWebhookInstancesIndexRoute } from '../routes'

export const getWebhookInstancesIndexRouteHandler: RouteHandler<
  typeof getWebhookInstancesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWebhookInstancesGuidRouteHandler: RouteHandler<
  typeof deleteWebhookInstancesGuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
