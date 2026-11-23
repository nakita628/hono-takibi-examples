import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubscriptionRoute } from '../routes'

export const getSubscriptionRouteHandler: RouteHandler<typeof getSubscriptionRoute> = async (c) => {
  throw new Error('Not implemented')
}
