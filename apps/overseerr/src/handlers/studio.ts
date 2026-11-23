import type { RouteHandler } from '@hono/zod-openapi'
import type { getStudioStudioIdRoute } from '../routes'

export const getStudioStudioIdRouteHandler: RouteHandler<typeof getStudioStudioIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
