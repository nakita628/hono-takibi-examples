import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhookEventTypesRoute } from '../routes'

export const getWebhookEventTypesRouteHandler: RouteHandler<
  typeof getWebhookEventTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
