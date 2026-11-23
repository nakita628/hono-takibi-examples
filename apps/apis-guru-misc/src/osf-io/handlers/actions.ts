import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionsIndexRoute } from '../routes'

export const getActionsIndexRouteHandler: RouteHandler<typeof getActionsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}
