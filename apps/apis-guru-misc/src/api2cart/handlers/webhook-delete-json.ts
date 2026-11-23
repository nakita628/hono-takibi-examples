import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteWebhookDeleteJsonRoute } from '../routes'

export const deleteWebhookDeleteJsonRouteHandler: RouteHandler<
  typeof deleteWebhookDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
