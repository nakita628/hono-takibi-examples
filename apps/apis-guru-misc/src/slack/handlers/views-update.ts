import type { RouteHandler } from '@hono/zod-openapi'
import type { getViewsUpdateRoute } from '../routes'

export const getViewsUpdateRouteHandler: RouteHandler<typeof getViewsUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}
