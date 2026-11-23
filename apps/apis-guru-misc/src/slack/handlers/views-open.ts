import type { RouteHandler } from '@hono/zod-openapi'
import type { getViewsOpenRoute } from '../routes'

export const getViewsOpenRouteHandler: RouteHandler<typeof getViewsOpenRoute> = async (c) => {
  throw new Error('Not implemented')
}
