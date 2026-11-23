import type { RouteHandler } from '@hono/zod-openapi'
import type { postWhatsappWebhooksRoute } from '../routes'

export const postWhatsappWebhooksRouteHandler: RouteHandler<
  typeof postWhatsappWebhooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
