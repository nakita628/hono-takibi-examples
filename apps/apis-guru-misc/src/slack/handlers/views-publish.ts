import type { RouteHandler } from '@hono/zod-openapi'
import type { getViewsPublishRoute } from '../routes'

export const getViewsPublishRouteHandler: RouteHandler<typeof getViewsPublishRoute> = async (c) => {
  throw new Error('Not implemented')
}
