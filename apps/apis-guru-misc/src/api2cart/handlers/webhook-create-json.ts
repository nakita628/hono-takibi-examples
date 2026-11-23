import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookCreateJsonRoute } from '../routes'

export const postWebhookCreateJsonRouteHandler: RouteHandler<
  typeof postWebhookCreateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
