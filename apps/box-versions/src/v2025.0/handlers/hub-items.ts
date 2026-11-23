import type { RouteHandler } from '@hono/zod-openapi'
import type { getHubItemsRoute } from '../routes'

export const getHubItemsRouteHandler: RouteHandler<typeof getHubItemsRoute> = async (c) => {
  throw new Error('Not implemented')
}
