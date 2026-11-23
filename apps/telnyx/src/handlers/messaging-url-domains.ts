import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagingUrlDomainsRoute } from '../routes'

export const getMessagingUrlDomainsRouteHandler: RouteHandler<
  typeof getMessagingUrlDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
