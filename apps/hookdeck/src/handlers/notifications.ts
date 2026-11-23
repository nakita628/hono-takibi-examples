import type { RouteHandler } from '@hono/zod-openapi'
import type { putNotificationsWebhooksRoute } from '../routes'

export const putNotificationsWebhooksRouteHandler: RouteHandler<
  typeof putNotificationsWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
