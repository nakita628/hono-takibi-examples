import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsAppSlugRoute } from '../routes'

export const getAppsAppSlugRouteHandler: RouteHandler<typeof getAppsAppSlugRoute> = async (c) => {
  throw new Error('Not implemented')
}
