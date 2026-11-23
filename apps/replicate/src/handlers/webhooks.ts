import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhooksDefaultSecretRoute } from '../routes'

export const getWebhooksDefaultSecretRouteHandler: RouteHandler<
  typeof getWebhooksDefaultSecretRoute
> = async (c) => {
  throw new Error('Not implemented')
}
