import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2InstagramHashtagsCleanerRoute } from '../routes'

export const getV2InstagramHashtagsCleanerRouteHandler: RouteHandler<
  typeof getV2InstagramHashtagsCleanerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
