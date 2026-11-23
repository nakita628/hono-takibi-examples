import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboxRoute } from '../routes'

export const getInboxRouteHandler: RouteHandler<typeof getInboxRoute> = async (c) => {
  throw new Error('Not implemented')
}
