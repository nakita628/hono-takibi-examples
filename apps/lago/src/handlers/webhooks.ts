import type { RouteHandler } from '@hono/zod-openapi'
import type { getWebhooksJsonPublicKeyRoute, getWebhooksPublicKeyRoute } from '../routes'

export const getWebhooksPublicKeyRouteHandler: RouteHandler<
  typeof getWebhooksPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWebhooksJsonPublicKeyRouteHandler: RouteHandler<
  typeof getWebhooksJsonPublicKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
