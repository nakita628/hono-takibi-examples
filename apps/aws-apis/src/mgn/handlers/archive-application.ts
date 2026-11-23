import type { RouteHandler } from '@hono/zod-openapi'
import type { postArchiveApplicationRoute } from '../routes'

export const postArchiveApplicationRouteHandler: RouteHandler<
  typeof postArchiveApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
