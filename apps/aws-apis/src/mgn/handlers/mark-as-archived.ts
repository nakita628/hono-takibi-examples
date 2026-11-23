import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkAsArchivedRoute } from '../routes'

export const postMarkAsArchivedRouteHandler: RouteHandler<typeof postMarkAsArchivedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
