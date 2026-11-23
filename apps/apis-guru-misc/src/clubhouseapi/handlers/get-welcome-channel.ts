import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetWelcomeChannelRoute } from '../routes'

export const getGetWelcomeChannelRouteHandler: RouteHandler<
  typeof getGetWelcomeChannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
