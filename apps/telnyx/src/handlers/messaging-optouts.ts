import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagingOptoutsRoute } from '../routes'

export const getMessagingOptoutsRouteHandler: RouteHandler<
  typeof getMessagingOptoutsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
