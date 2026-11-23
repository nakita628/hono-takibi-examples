import type { RouteHandler } from '@hono/zod-openapi'
import type { getSubscriberListJsonRoute } from '../routes'

export const getSubscriberListJsonRouteHandler: RouteHandler<
  typeof getSubscriberListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
