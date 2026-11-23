import type { RouteHandler } from '@hono/zod-openapi'
import type { postWebhookVerificationKeyGetRoute } from '../routes'

export const postWebhookVerificationKeyGetRouteHandler: RouteHandler<
  typeof postWebhookVerificationKeyGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
