import type { RouteHandler } from '@hono/zod-openapi'
import type { getResolutionsRoute } from '../routes'

export const getResolutionsRouteHandler: RouteHandler<typeof getResolutionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
